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
        "<img src='" + repo_site + "imgs/practice_img.png'></img>" +
        "<p>Press the \"e\" key if the item contains plastic. </p>" +
        "<p>Press the \"i\" key if the item does not contain plastic. </p>" +
        "<p>Press any key to begin.</p>",
    post_trial_gap: 2000
};

/*defining stimuli*/
var test_stimuli = [{
        stimulus: repo_site + "imgs/stim_plastic1.png",
        data: {
            stim_type: 'plastic1',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic2.png",
        data: {
            stim_type: 'plastic2',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic3.png",
        data: {
            stim_type: 'plastic3',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic4.png",
        data: {
            stim_type: 'plastic4',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic5.png",
        data: {
            stim_type: 'plastic5',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic6.png",
        data: {
            stim_type: 'plastic6',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic7.png",
        data: {
            stim_type: 'plastic7',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic8.png",
        data: {
            stim_type: 'plastic8',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic9.png",
        data: {
            stim_type: 'plastic9',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic10.png",
        data: {
            stim_type: 'plastic10',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic11.png",
        data: {
            stim_type: 'plastic11',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic12.png",
        data: {
            stim_type: 'plastic12',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic13.png",
        data: {
            stim_type: 'plastic13',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic14.png",
        data: {
            stim_type: 'plastic14',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic15.png",
        data: {
            stim_type: 'plastic15',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic16.png",
        data: {
            stim_type: 'plastic16',
            direction: 'e'
        }
    },
    {
       stimulus: repo_site + "imgs/stim_plastic17.png",
        data: {
            stim_type: 'plastic17',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic18.png",
        data: {
            stim_type: 'plastic18',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic19.png",
        data: {
            stim_type: 'plastic19',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic20.png",
        data: {
            stim_type: 'plastic20',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic21.png",
        data: {
            stim_type: 'plastic21',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic22.png",
        data: {
            stim_type: 'plastic22',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic23.png",
        data: {
            stim_type: 'plastic23',
            direction: 'e'
        }
    },
    {
       stimulus: repo_site + "imgs/stim_plastic24.png",
        data: {
            stim_type: 'plastic24',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic25.png",
        data: {
            stim_type: 'plastic25',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic26.png",
        data: {
            stim_type: 'plastic26',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic27.png",
        data: {
            stim_type: 'plastic27',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic28.png",
        data: {
            stim_type: 'plastic28',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic29.png",
        data: {
            stim_type: 'plastic29',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic30.png",
        data: {
            stim_type: 'plastic30',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic31.png",
        data: {
            stim_type: 'plastic31',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic32.png",
        data: {
            stim_type: 'plastic32',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic33.png",
        data: {
            stim_type: 'plastic33',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic34.png",
        data: {
            stim_type: 'plastic34',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic35.png",
        data: {
            stim_type: 'plastic35',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic36.png",
        data: {
            stim_type: 'plastic36',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic1.png",
        data: {
            stim_type: 'noplastic1',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic2.png",
        data: {
            stim_type: 'noplastic2',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic3.png",
        data: {
            stim_type: 'noplastic3',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic4.png",
        data: {
            stim_type: 'noplastic4',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic5.png",
        data: {
            stim_type: 'noplastic5',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic6.png",
        data: {
            stim_type: 'noplastic6',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic7.png",
        data: {
            stim_type: 'noplastic7',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic8.png",
        data: {
            stim_type: 'noplastic8',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic9.png",
        data: {
            stim_type: 'noplastic9',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic10.png",
        data: {
            stim_type: 'noplastic10',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic11.png",
        data: {
            stim_type: 'noplastic11',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic12.png",
        data: {
            stim_type: 'noplastic12',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic13.png",
        data: {
            stim_type: 'noplastic13',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic14.png",
        data: {
            stim_type: 'noplastic14',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic15.png",
        data: {
            stim_type: 'noplastic15',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic16.png",
        data: {
            stim_type: 'noplastic16',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic17.png",
        data: {
            stim_type: 'noplastic17',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic18.png",
        data: {
            stim_type: 'noplastic18',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic19.png",
        data: {
            stim_type: 'noplastic19',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic20.png",
        data: {
            stim_type: 'noplastic20',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic21.png",
        data: {
            stim_type: 'noplastic21',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic22.png",
        data: {
            stim_type: 'noplastic22',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic23.png",
        data: {
            stim_type: 'noplastic23',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic24.png",
        data: {
            stim_type: 'noplastic24',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic25.png",
        data: {
            stim_type: 'noplastic25',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic26.png",
        data: {
            stim_type: 'noplastic26',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic27.png",
        data: {
            stim_type: 'noplastic27',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic28.png",
        data: {
            stim_type: 'noplastic28',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic29.png",
        data: {
            stim_type: 'noplastic29',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic30.png",
        data: {
            stim_type: 'noplastic30',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic31.png",
        data: {
            stim_type: 'noplastic31',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic32.png",
        data: {
            stim_type: 'noplastic32',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic33.png",
        data: {
            stim_type: 'noplastic33',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic34.png",
        data: {
            stim_type: 'noplastic34',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic35.png",
        data: {
            stim_type: 'noplastic35',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic36.png",
        data: {
            stim_type: 'noplastic36',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_plastic_test.png",
        data: {
            stim_type: 'plastic_test',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "imgs/stim_noplastic_test.png",
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
        trial_duration: 7500,
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
        var noplastic31_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic31'
        }).select('rt').mean());
        var noplastic32_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic32'
        }).select('rt').mean());
        var noplastic33_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic33'
        }).select('rt').mean());
        var noplastic34_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic34'
        }).select('rt').mean());
        var noplastic35_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic35'
        }).select('rt').mean());
        var noplastic36_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic36'
        }).select('rt').mean());
        var plastic_test_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic_test'
        }).select('rt').mean());
        var noplastic_test_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic_test'
        }).select('rt').mean());
        var f_plastic1_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic1'
        }).select('rt').mean());
        var f_plastic2_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic2'
        }).select('rt').mean());
        var f_plastic3_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic3'
        }).select('rt').mean());
        var f_plastic4_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic4'
        }).select('rt').mean());
        var f_plastic5_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic5'
        }).select('rt').mean());
        var f_plastic6_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic6'
        }).select('rt').mean());
        var f_plastic7_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic7'
        }).select('rt').mean());
        var f_plastic8_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic8'
        }).select('rt').mean());
        var f_plastic9_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic9'
        }).select('rt').mean());
        var f_plastic10_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic10'
        }).select('rt').mean());
        var f_plastic11_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic11'
        }).select('rt').mean());
        var f_plastic12_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic12'
        }).select('rt').mean());
        var f_plastic13_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic13'
        }).select('rt').mean());
        var f_plastic14_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic14'
        }).select('rt').mean());
        var f_plastic15_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic15'
        }).select('rt').mean());
        var f_plastic16_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic16'
        }).select('rt').mean());
        var f_plastic17_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic17'
        }).select('rt').mean());
        var f_plastic18_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic18'
        }).select('rt').mean());
        var f_plastic19_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic19'
        }).select('rt').mean());
        var f_plastic20_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic20'
        }).select('rt').mean());
        var f_plastic21_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic21'
        }).select('rt').mean());
        var f_plastic22_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic22'
        }).select('rt').mean());
        var f_plastic23_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic23'
        }).select('rt').mean());
        var f_plastic24_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic24'
        }).select('rt').mean());
        var f_plastic25_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic25'
        }).select('rt').mean());
        var f_plastic26_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic26'
        }).select('rt').mean());
        var f_plastic27_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic27'
        }).select('rt').mean());
        var f_plastic28_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic28'
        }).select('rt').mean());
        var f_plastic29_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic29'
        }).select('rt').mean());
        var f_plastic30_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic30'
        }).select('rt').mean());
        var f_plastic31_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic31'
        }).select('rt').mean());
        var f_plastic32_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic32'
        }).select('rt').mean());
        var f_plastic33_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic33'
        }).select('rt').mean());
        var f_plastic34_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic34'
        }).select('rt').mean());
        var f_plastic35_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic35'
        }).select('rt').mean());
        var f_plastic36_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic36'
        }).select('rt').mean());
        var f_noplastic1_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic1'
        }).select('rt').mean());
        var f_noplastic2_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic2'
        }).select('rt').mean());
        var f_noplastic3_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic3'
        }).select('rt').mean());
        var f_noplastic4_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic4'
        }).select('rt').mean());
        var f_noplastic5_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic5'
        }).select('rt').mean());
        var f_noplastic6_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic6'
        }).select('rt').mean());
        var f_noplastic7_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic7'
        }).select('rt').mean());
        var f_noplastic8_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic8'
        }).select('rt').mean());
        var f_noplastic9_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic9'
        }).select('rt').mean());
        var f_noplastic10_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic10'
        }).select('rt').mean());
        var f_noplastic11_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic11'
        }).select('rt').mean());
        var f_noplastic12_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic12'
        }).select('rt').mean());
        var f_noplastic13_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic13'
        }).select('rt').mean());
        var f_noplastic14_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic14'
        }).select('rt').mean());
        var f_noplastic15_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic15'
        }).select('rt').mean());
        var f_noplastic16_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic16'
        }).select('rt').mean());
        var f_noplastic17_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic17'
        }).select('rt').mean());
        var f_noplastic18_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic18'
        }).select('rt').mean());
        var f_noplastic19_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic19'
        }).select('rt').mean());
        var f_noplastic20_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic20'
        }).select('rt').mean());
        var f_noplastic21_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic21'
        }).select('rt').mean());
        var f_noplastic22_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic22'
        }).select('rt').mean());
        var f_noplastic23_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic23'
        }).select('rt').mean());
        var f_noplastic24_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic24'
        }).select('rt').mean());
        var f_noplastic25_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic25'
        }).select('rt').mean());
        var f_noplastic26_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic26'
        }).select('rt').mean());
        var f_noplastic27_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic27'
        }).select('rt').mean());
        var f_noplastic28_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic28'
        }).select('rt').mean());
        var f_noplastic29_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic29'
        }).select('rt').mean());
        var f_noplastic30_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic30'
        }).select('rt').mean());
        var f_noplastic31_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic31'
        }).select('rt').mean());
        var f_noplastic32_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic32'
        }).select('rt').mean());
        var f_noplastic33_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic33'
        }).select('rt').mean());
        var f_noplastic34_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic34'
        }).select('rt').mean());
        var f_noplastic35_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic35'
        }).select('rt').mean());
        var f_noplastic36_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic36'
        }).select('rt').mean());
        var f_plastic_test_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_plastic_test'
        }).select('rt').mean());
        var f_noplastic_test_rt = Math.round(jsPsych.data.get().filter({
            correct: false,
            stim_type: 'f_noplastic_test'
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
