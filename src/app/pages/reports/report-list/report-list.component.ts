import {Component} from '@angular/core';
import {ProfileApi} from '../../../data/api/profile.api';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.scss']
})

export class ReportListComponent {
    studentPerTrackChartOptions: any;
    studentPerTrackChartData: any;

    choiceAgainstResultOptions: any;
    choiceAgainstResultData: any;

    genderDistributionOptions: any;
    genderDistributionData: any;

    constructor(private db: ProfileApi) {
        this.studentPerTrackChart();
    }

    studentPerTrackChart() {
        this.studentPerTrackChartOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                duration: 500,
                valueFormat: function(d) {
                    return d3.format('f')(d);
                },
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        this.choiceAgainstResultOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                duration: 500,
                valueFormat: function(d) {
                    return d3.format('f')(d);
                },
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        this.genderDistributionOptions = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d) {
                        return d3.format('f')(d);
                    }
                }
            }
        };

        this.db.getProfileByResult('result', '2019').subscribe(data => {
            this.studentPerTrackChartData = [];
            const dsList = data.filter(sd => JSON.parse(sd.finalResult1)['result'] === 'DS');
            const sdList = data.filter(sd => JSON.parse(sd.finalResult1)['result'] === 'SD');
            const msList = data.filter(sd => JSON.parse(sd.finalResult1)['result'] === 'MS');
            this.studentPerTrackChartData.push({key: 'Software Development', y: sdList.length});
            this.studentPerTrackChartData.push({key: 'Distributed Systems', y: dsList.length});
            this.studentPerTrackChartData.push({key: 'Multimedia Studies', y: msList.length});

            const choiceSelected = data.filter(sd => (JSON.parse(sd.finalResult1)['result'] === 'SD' && sd.studentChoice === 'Software Development') ||
                (JSON.parse(sd.finalResult1)['result'] === 'MS' && sd.studentChoice === 'Multimedia Studies') ||
                (JSON.parse(sd.finalResult1)['result'] === 'DS' && sd.studentChoice === 'Distributed Systems'));

            this.choiceAgainstResultData = [];
            this.choiceAgainstResultData.push({key: 'Student Choice Selected as Result', y: choiceSelected.length});
            this.choiceAgainstResultData.push({key: 'Student Choice Not Selected as Result', y: data.length - choiceSelected.length});

            const sdFemale = sdList.filter(x => x['gender'] === 'F');
            const sdMale = sdList.filter(x => x['gender'] === 'M');

            const dsFemale = dsList.filter(x => x['gender'] === 'F');
            const dsMale = dsList.filter(x => x['gender'] === 'M');

            const msFemale = msList.filter(x => x['gender'] === 'F');
            const msMale = msList.filter(x => x['gender'] === 'M');



            this.genderDistributionData = [
                {
                    'key': 'Software Development',
                    'values': [
                        {
                            'label': 'Male',
                            'value': sdMale.length
                        },
                        {
                            'label': 'Female',
                            'value': sdFemale.length
                        }
                    ]
                },
                {
                    'key': 'Multimedia Studies',
                    'values': [
                        {
                            'label' : 'Male' ,
                            'value' : msMale.length
                        },
                        {
                            'label' : 'Female' ,
                            'value' : msFemale.length
                        }
                    ]
                },
                {
                    'key': 'Distributed Systems',
                    'values': [
                        {
                            'label' : 'Male' ,
                            'value' : dsMale.length
                        },
                        {
                            'label' : 'Female' ,
                            'value' : dsFemale.length
                        }
                    ]
                }
            ];
        });
    }
}
