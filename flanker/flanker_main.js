// Use JSDELIVR to get the files from a GitHub repository
// https://cdn.jsdelivr.net/gh/<github-username>/<repository-name>/
var repo_site = "https://cdn.jsdelivr.net/gh/ndillmanhasso/jsPsych-in-Qualtrics-exemplar-category/flanker/";

/* experiment parameters */
var reps_per_trial_type = 4;

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
        return "<p>You responded correctly on <strong>" + accuracy + "%</strong> of the trials.</p> " +
            "<p>Your average response time for plastic trials was <strong>" + plastic_rt + "ms</strong>.</p>" +
            "<p>Your average response time for non-plastic trials was <strong>" + noplastic_rt + "ms</strong>.</p>" +
            "<p>Press any key to complete the experiment. Thank you!</p>";
    }
};

/*set up experiment structure*/
var timeline = [];
timeline.push(welcome);
timeline.push(instructions);
timeline.push(test);
timeline.push(debrief);
