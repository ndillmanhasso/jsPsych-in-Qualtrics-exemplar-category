// Use JSDELIVR to get the files from a GitHub repository
// https://cdn.jsdelivr.net/gh/<github-username>/<repository-name>/
var repo_site = "https://cdn.jsdelivr.net/gh/ndillmanhasso/jsPsych-in-Qualtrics-exemplar-category/flanker/";

/* experiment parameters */
var reps_per_trial_type = 1;

/*set up welcome block*/
var welcome = {
    type: "html-keyboard-response",
    stimulus: "Thank you for agreeing to participate. In this experiment, you will be determining whether items you can find at a grocery store contain plastic or not. If an item does contain plastic, press the \"e\" key. If the item does not contain plastic, press the \"i\" key. Press any key to see an example."
};

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
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic2.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic3.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic4.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic5.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic6.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic7.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic8.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic9.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic10.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic11.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic12.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic13.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic14.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic15.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic16.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
       stimulus: repo_site + "img/plastic17.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic18.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic19.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic20.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic21.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic22.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic23.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
       stimulus: repo_site + "img/plastic24.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic25.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic26.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic27.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic28.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic29.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic30.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic31.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic32.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic33.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic34.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic35.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/plastic36.png",
        data: {
            stim_type: 'plastic',
            direction: 'e'
        }
    },
    {
        stimulus: repo_site + "img/noplastic1.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic2.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic3.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic4.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic5.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic6.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic7.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic8.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic9.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic10.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic11.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic12.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic13.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic14.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic15.png",
        data: {
            stim_type: 'noplastic',
            direction: 'i'
        }
    },
    {
        stimulus: repo_site + "img/noplastic16.png",
        data: {
            stim_type: 'noplastic',
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
        var plastic_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'plastic'
        }).select('rt').mean());
        var noplastic_rt = Math.round(jsPsych.data.get().filter({
            correct: true,
            stim_type: 'noplastic'
        }).select('rt').mean());
        return "<p>Press any key to complete the experiment. Thank you for your time!</p>";
    }
};

/*set up experiment structure*/
var timeline = [];
timeline.push(welcome);
timeline.push(instructions);
timeline.push(test);
timeline.push(debrief);
