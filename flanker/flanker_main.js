// Use JSDELIVR to get the files from a GitHub repository
// https://cdn.jsdelivr.net/gh/<github-username>/<repository-name>/
var repo_site = "https://cdn.jsdelivr.net/gh/ndillmanhasso/jsPsych-in-Qualtrics-exemplar-category/flanker/";

/* experiment parameters */
var reps_per_trial_type = 1;

/*set up welcome block*/
var welcome = {
    type: "html-keyboard-response",
    stimulus: "Thank you for agreeing to participate. In this experiment, you will be determining whether items you can find at a grocery store contain plastic or not. If an item does contain plastic, press the \"e\" key. If the item does not contain plastic, press the \"i\" key. Press any key to continue."
};

/* welcome block 2*/
var welcome2 = {
    type: "html-keyboard-response",
    stimulus: "There are two things to keep in mind when you do this task. First, and above all, be accurate. Don't be in such a hurry to respond that you regret your decision. Second, while being accurate, try to respond as quickly as possible. So, you should try to maximize both the speed and the accuracy of your responses. Press any key to see an example."
}

/*set up instructions block*/
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>Below you see an item from a grocery store.</p>" +
        "<img src='" + repo_site + "img/plastic1.png'></img>" +
        "<p>Press the \"e\" key if the item contains plastic. </p>" +
        "<p>Press the \"i\" key if the item does not contain plastic. </p>" +
        "<p>Press any key to begin.</p>",
    post_trial_gap: 2000
};

/*defining stimuli*/
var test_stimuli = [{
        stimulus: repo_site + "img/plastic1.png",
        data: {
            stim_type: 'plastic1',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic2.png",
        data: {
            stim_type: 'plastic2',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic3.png",
        data: {
            stim_type: 'plastic3',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic4.png",
        data: {
            stim_type: 'plastic4',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic5.png",
        data: {
            stim_type: 'plastic5',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic6.png",
        data: {
            stim_type: 'plastic6',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic7.png",
        data: {
            stim_type: 'plastic7',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic8.png",
        data: {
            stim_type: 'plastic8',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic9.png",
        data: {
            stim_type: 'plastic9',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic10.png",
        data: {
            stim_type: 'plastic10',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic11.png",
        data: {
            stim_type: 'plastic11',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic12.png",
        data: {
            stim_type: 'plastic12',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic13.png",
        data: {
            stim_type: 'plastic13',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic14.png",
        data: {
            stim_type: 'plastic14',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic15.png",
        data: {
            stim_type: 'plastic15',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic16.png",
        data: {
            stim_type: 'plastic16',
            direction: 'e'
        }
    },
    {
       stimulus: repo_site + "img/plastic17.png",
        data: {
            stim_type: 'plastic17',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic18.png",
        data: {
            stim_type: 'plastic18',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic19.png",
        data: {
            stim_type: 'plastic19',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic20.png",
        data: {
            stim_type: 'plastic20',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic21.png",
        data: {
            stim_type: 'plastic21',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic22.png",
        data: {
            stim_type: 'plastic22',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic23.png",
        data: {
            stim_type: 'plastic23',
            direction: 'e'
        }
    },
    {
       stimulus: repo_site + "img/plastic24.png",
        data: {
            stim_type: 'plastic24',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic25.png",
        data: {
            stim_type: 'plastic25',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic26.png",
        data: {
            stim_type: 'plastic26',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic27.png",
        data: {
            stim_type: 'plastic27',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic28.png",
        data: {
            stim_type: 'plastic28',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic29.png",
        data: {
            stim_type: 'plastic29',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic30.png",
        data: {
            stim_type: 'plastic30',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic31.png",
        data: {
            stim_type: 'plastic31',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic32.png",
        data: {
            stim_type: 'plastic32',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic33.png",
        data: {
            stim_type: 'plastic33',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic34.png",
        data: {
            stim_type: 'plastic34',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic35.png",
        data: {
            stim_type: 'plastic35',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic36.png",
        data: {
            stim_type: 'plastic36',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/noplastic1.png",
        data: {
            stim_type: 'noplastic1',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic2.png",
        data: {
            stim_type: 'noplastic2',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic3.png",
        data: {
            stim_type: 'noplastic3',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic4.png",
        data: {
            stim_type: 'noplastic4',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic5.png",
        data: {
            stim_type: 'noplastic5',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic6.png",
        data: {
            stim_type: 'noplastic6',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic7.png",
        data: {
            stim_type: 'noplastic7',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic8.png",
        data: {
            stim_type: 'noplastic8',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic9.png",
        data: {
            stim_type: 'noplastic9',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic10.png",
        data: {
            stim_type: 'noplastic10',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic11.png",
        data: {
            stim_type: 'noplastic11',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic12.png",
        data: {
            stim_type: 'noplastic12',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic13.png",
        data: {
            stim_type: 'noplastic13',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic14.png",
        data: {
            stim_type: 'noplastic14',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic15.png",
        data: {
            stim_type: 'noplastic15',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic16.png",
        data: {
            stim_type: 'noplastic16',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic17.png",
        data: {
            stim_type: 'noplastic17',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic18.png",
        data: {
            stim_type: 'noplastic18',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic19.png",
        data: {
            stim_type: 'noplastic19',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic20.png",
        data: {
            stim_type: 'noplastic20',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic21.png",
        data: {
            stim_type: 'noplastic21',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic22.png",
        data: {
            stim_type: 'noplastic22',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic23.png",
        data: {
            stim_type: 'noplastic23',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic24.png",
        data: {
            stim_type: 'noplastic24',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic25.png",
        data: {
            stim_type: 'noplastic25',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic26.png",
        data: {
            stim_type: 'noplastic26',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic27.png",
        data: {
            stim_type: 'noplastic27',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic28.png",
        data: {
            stim_type: 'noplastic28',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic29.png",
        data: {
            stim_type: 'noplastic29',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic30.png",
        data: {
            stim_type: 'noplastic30',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/plastic_test.png",
        data: {
            stim_type: 'plastic_test',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/noplastic_test.png",
        data: {
            stim_type: 'noplastic_test',
            direction: 'i'
        }
    }

];

/* defining test timeline */
var test = {
    timeline: [{
        type: 'image-keyboard-response',
        choices: [69, 73],
        trial_duration: 5000,
        stimulus: jsPsych.timelineVariable('stimulus'),
        data: jsPsych.timelineVariable('data'),
        on_finish: function (data) {
            var correct = false;
            if (data.direction == 'e' && data.key_press == 69 && data.rt > -1) {
                correct = true;
            } else if (data.direction == 'i' && data.key_press == 73 && data.rt > -1) {
                correct = true;
            }
            data.correct = correct;
        },
        post_trial_gap: function () {
            return Math.floor(Math.random() * 1500) + 500;
        }
    }],
    timeline_variables: test_stimuli,
    sample: {
        type: 'fixed-repetitions',
        size: reps_per_trial_type
    }
};

/*defining debriefing block*/
var debrief = {
    type: "html-keyboard-response",
    stimulus: function () {
        var total_trials = jsPsych.data.get().filter({
            trial_type: 'image-keyboard-response'
        }).count();
        var accuracy = Math.round(jsPsych.data.get().filter({
            correct: true
        }).count() / total_trials * 100);
        var plastic1_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic1'
        }).select('rt').mean());
        var plastic2_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic2'
        }).select('rt').mean());
        var plastic3_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic3'
        }).select('rt').mean());
        var plastic4_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic4'
        }).select('rt').mean());
        var plastic5_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic5'
        }).select('rt').mean());
        var plastic6_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic6'
        }).select('rt').mean());
        var plastic7_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic7'
        }).select('rt').mean());
        var plastic8_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic8'
        }).select('rt').mean());
        var plastic9_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic9'
        }).select('rt').mean());
        var plastic10_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic10'
        }).select('rt').mean());
        var plastic11_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic11'
        }).select('rt').mean());
        var plastic12_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic12'
        }).select('rt').mean());
        var plastic13_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic13'
        }).select('rt').mean());
        var plastic14_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic14'
        }).select('rt').mean());
        var plastic15_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic15'
        }).select('rt').mean());
        var plastic16_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic16'
        }).select('rt').mean());
        var plastic17_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic17'
        }).select('rt').mean());
        var plastic18_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic18'
        }).select('rt').mean());
        var plastic19_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic19'
        }).select('rt').mean());
        var plastic20_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic20'
        }).select('rt').mean());
        var plastic21_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic21'
        }).select('rt').mean());
        var plastic22_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic22'
        }).select('rt').mean());
        var plastic23_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic23'
        }).select('rt').mean());
        var plastic24_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic24'
        }).select('rt').mean());
        var plastic25_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic25'
        }).select('rt').mean());
        var plastic26_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic26'
        }).select('rt').mean());
        var plastic27_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic27'
        }).select('rt').mean());
        var plastic28_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic28'
        }).select('rt').mean());
        var plastic29_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic29'
        }).select('rt').mean());
        var plastic30_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic30'
        }).select('rt').mean());
        var plastic31_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic31'
        }).select('rt').mean());
        var plastic32_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic32'
        }).select('rt').mean());
        var plastic33_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic33'
        }).select('rt').mean());
        var plastic34_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic34'
        }).select('rt').mean());
        var plastic35_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic35'
        }).select('rt').mean());
        var plastic36_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic36'
        }).select('rt').mean());
        var noplastic1_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic1'
        }).select('rt').mean());
        var noplastic2_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic2'
        }).select('rt').mean());
        var noplastic3_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic3'
        }).select('rt').mean());
        var noplastic4_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic4'
        }).select('rt').mean());
        var noplastic5_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic5'
        }).select('rt').mean());
        var noplastic6_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic6'
        }).select('rt').mean());
        var noplastic7_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic7'
        }).select('rt').mean());
        var noplastic8_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic8'
        }).select('rt').mean());
        var noplastic9_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic9'
        }).select('rt').mean());
        var noplastic10_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic10'
        }).select('rt').mean());
        var noplastic11_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic11'
        }).select('rt').mean());
        var noplastic12_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic12'
        }).select('rt').mean());
        var noplastic13_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic13'
        }).select('rt').mean());
        var noplastic14_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic14'
        }).select('rt').mean());
        var noplastic15_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic15'
        }).select('rt').mean());
        var noplastic16_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic16'
        }).select('rt').mean());
        var noplastic17_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic17'
        }).select('rt').mean());
        var noplastic18_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic18'
        }).select('rt').mean());
        var noplastic19_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic19'
        }).select('rt').mean());
        var noplastic20_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic20'
        }).select('rt').mean());
        var noplastic21_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic21'
        }).select('rt').mean());
        var noplastic22_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic22'
        }).select('rt').mean());
        var noplastic23_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic23'
        }).select('rt').mean());
        var noplastic24_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic24'
        }).select('rt').mean());
        var noplastic25_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic25'
        }).select('rt').mean());
        var noplastic26_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic26'
        }).select('rt').mean());
        var noplastic27_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic27'
        }).select('rt').mean());
        var noplastic28_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic28'
        }).select('rt').mean());
        var noplastic29_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic29'
        }).select('rt').mean());
        var noplastic30_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic30'
        }).select('rt').mean());
        var plastic_test_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic_test'
        }).select('rt').mean());
        var noplastic_test_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic_test'
        }).select('rt').mean());
        return "<p>You have completed the experiment. Press any key to answer a few final questions.</p>";
    }
};

/*set up experiment structure*/
var timeline = [];
timeline.push(welcome);
timeline.push(welcome2);
timeline.push(instructions);
timeline.push(test);
timeline.push(debrief);
