Qualtrics.SurveyEngine.addOnload(function () {

    /*Place your JavaScript here to run when the page loads*/

    /* Change 1: Hiding the Next button */
    // Retrieve Qualtrics object and save in qthis
    var qthis = this;

    // Hide buttons
    qthis.hideNextButton();

    /* Change 2: Defining and load required resources */
    // https://cdn.jsdelivr.net/gh/<github-username>/<repository-name>/<experiment-folder>
    var task_github = "https://cdn.jsdelivr.net/gh/ndillmanhasso/jsPsych-in-Qualtrics-exemplar-category/flanker/";

    // requiredResources must include all the JS files that demo-simple-rt-task-transformed.html uses.
    var requiredResources = [
        task_github + "jspsych-6.1.0/jspsych.js",
        task_github + "jspsych-6.1.0/plugins/jspsych-html-keyboard-response.js",
        task_github + "jspsych-6.1.0/plugins/jspsych-image-keyboard-response.js",
        task_github + "flanker_main.js"
    ];

    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    }

    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }

    /* Change 3: Appending the display_stage Div using jQuery */
    // jQuery is loaded in Qualtrics by default
    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');

    /* Change 4: Wrapping jsPsych.init() in a function */
    function initExp() {

        jsPsych.init({
            timeline: timeline,
            display_element: 'display_stage',
            on_finish: function (data) {
                /* Change 5: Summarizing and save the results to Qualtrics */
                // summarize the results
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

                // save to qualtrics embedded data
                Qualtrics.SurveyEngine.setEmbeddedData("accuracy", accuracy);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic1_rt", plastic1_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic2_rt", plastic2_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic3_rt", plastic3_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic4_rt", plastic4_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic5_rt", plastic5_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic6_rt", plastic6_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic7_rt", plastic7_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic8_rt", plastic8_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic9_rt", plastic9_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic10_rt", plastic10_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic11_rt", plastic11_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic12_rt", plastic12_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic13_rt", plastic13_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic14_rt", plastic14_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic15_rt", plastic15_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic16_rt", plastic16_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic17_rt", plastic17_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic18_rt", plastic18_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic19_rt", plastic19_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic20_rt", plastic20_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic21_rt", plastic21_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic22_rt", plastic22_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic23_rt", plastic23_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic24_rt", plastic24_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic25_rt", plastic25_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic26_rt", plastic26_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic27_rt", plastic27_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic28_rt", plastic28_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic29_rt", plastic29_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic30_rt", plastic30_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic31_rt", plastic31_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic32_rt", plastic32_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic33_rt", plastic33_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic34_rt", plastic34_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic35_rt", plastic35_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic36_rt", plastic36_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic1_rt", noplastic1_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic2_rt", noplastic2_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic3_rt", noplastic3_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic4_rt", noplastic4_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic5_rt", noplastic5_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic6_rt", noplastic6_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic7_rt", noplastic7_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic8_rt", noplastic8_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic9_rt", noplastic9_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic10_rt", noplastic10_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic11_rt", noplastic11_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic12_rt", noplastic12_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic13_rt", noplastic13_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic14_rt", noplastic14_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic15_rt", noplastic15_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic16_rt", noplastic16_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic17_rt", noplastic17_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic18_rt", noplastic18_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic19_rt", noplastic19_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic20_rt", noplastic20_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic21_rt", noplastic21_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic22_rt", noplastic22_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic23_rt", noplastic23_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic24_rt", noplastic24_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic25_rt", noplastic25_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic26_rt", noplastic26_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic27_rt", noplastic27_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic28_rt", noplastic28_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic29_rt", noplastic29_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic30_rt", noplastic30_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("plastic_test_rt", plastic_test_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("noplastic_test_rt", noplastic_test_rt);

                /* Change 6: Adding the clean up and continue functions.*/
                // clear the stage
                jQuery('#display_stage').remove();
                jQuery('#display_stage_background').remove();

                // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
                qthis.clickNextButton();
            }
        });
    }
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});
