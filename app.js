var quizQues = {
    id:-1,
    quesTitle : "",
    quesOptions : [],
    correctIndex : -1,
    quesFeed: "",
    quesUsed: false
}

var stats = {
    counter : 0,
    totalQues : 0,
    correctQ : 0,
    wrongQ:0
}

var quizQuesBank = {
    quizQues : [
        {id:1,quizTitle:'What was the treaty that ended WWI that laid some of the unrest that would later explode into WWII?',quesOptions:['Geneva Conference','Treaty of Versailles','Paris Peace Accords','Treaty of Brest-Litovsk'],correctIndex:1, quesFeed:'The Treaty of Versailles ended WWI in 1918, imposing heavy reparations on the German people that fomented unrest that boiled over in the 1930s.',quesUsed:false},
        {id:2,quizTitle:'Hitler became the essential dictator of Germany in which decade?',quesOptions:['1920s','1950s','1940s','1930s'],correctIndex:3, quesFeed:'Hitler was appointed Chancellor in 1933, and within a few years through various legislation was the de facto ruler of Germany.',quesUsed:false},
        {id:3,quizTitle:'What war during the 1930s greatly influenced the development of military tactics that were used in WWII?',quesOptions:['The Spanish-American War','The Boer War','The Spanish Civil War','The Korean War'],correctIndex:2, quesFeed:'The Spanish Civil War was between the German supported Fascist government of Franco against the Soviet supported Republican government. In this war tactics and early production models were battle-tested and refined.',quesUsed:false},
        {id:4,quizTitle:'What was the last major attempt at a peaceful resolution with Germany prior to the outbreak of WWII?',quesOptions:['The Munich Conference','The 1936 Olympic Conferences','The Washington Naval Conference','The Geneva Convention'],correctIndex:0, quesFeed:'The Munich Conference of 1938 was an attempt to diffuse growing tensions in Europe. British Prime Minister Chamberlain returned from the conference saying we have secured "peace in our time".',quesUsed:false},
        {id:5,quizTitle:'What event began World War II?',quesOptions:['Pearl Harbor','Assassination of Arch Duke Ferdinand','Invasion of Poland','Battle of Britain'],correctIndex:2, quesFeed:'Germany invaded Poland on 1 September 1939. Britain and France shortly after declared war on Germany.',quesUsed:false},
        {id:6,quizTitle:'This was a line of fortifications across the French border with Germany.',quesOptions:['The Siegfried Line','The Maginot Line','The Stalin Line','The Verdun Line'],correctIndex:1, quesFeed:'The Maginot Line was an extremely complex series of fortifications on the French-German border. Its guns, however, were never fired in anger as the Germans bypassed it during the Battle of France.',quesUsed:false},
        {id:7,quizTitle:'The British Expeditionary Force was made to evacuate France in 1940 through the French port of',quesOptions:['Calais','Le Rochelle','Antwerp','Dunkirke'],correctIndex:3, quesFeed:'Operation Dynamo rescued hundreds of thousands of British and French soldiers from Dunkirke, after the Germans had pushed them to the sea.',quesUsed:false},
        {id:8,quizTitle:'The Battle of Britain consisted of',quesOptions:['A Sea-borne landing operation','Unrestricted submarine warfare','Strategic bombing campaign','The largest tank battles in history'],correctIndex:2, quesFeed:'The Battle of Britain consisted primarily of an aerial war between Britain and Germany, with the stated goal of the German Luftwaffe to force Britain out of the war through bombing and later invasion.',quesUsed:false},
        {id:9,quizTitle:'Who was the leader of the Soviet Union during World War II?',quesOptions:['Lenin','Trotsky','Stalin','Khruschev'],correctIndex:2, quesFeed:'Joseph Stalin was the premiere of the Soviet Union during WW2 through to the early 1950s.',quesUsed:false},
        {id:10,quizTitle:'The decisive city battle of the Eastern European Front was',quesOptions:['Kursk','Stalingrad','Kharkov','Kharkov'],correctIndex:1, quesFeed:'Stalingrad was the bloodiest battle of world history. Following the battle the Germans never regained the initiative in the East.',quesUsed:false},
        {id:11,quizTitle:'What was the most significant early U.S. victory in the Pacific theatre?',quesOptions:['Battle of the Coral Sea','Wake Island','Iwo Jima','Midway'],correctIndex:3, quesFeed:'Midway was up to that point the most decisive victory for the U.S. in the war. The Japanese lost four aircraft careers and never again could regain the initiative.',quesUsed:false},
        {id:12,quizTitle:'Who was the commanding general of the German Afrika Korps nicknamed "The Desert Fox"?',quesOptions:['Rommel','Von Manstein','Von Rundtsted','Goering'],correctIndex:0, quesFeed:'Erwin Rommel commanded the Afrika Korps from 1941 to 1943, and is considered one of the wars finest leaders.',quesUsed:false},
        {id:13,quizTitle:'The firebombing of this German town was a major civillian tragedy during the war.',quesOptions:['Dusseldorf','Dresden','Stutgaart','Frankfurt'],correctIndex:1, quesFeed:'The firebombing of Dresden in 1945 killed more than 30,000 civilians and leveled most of the city.',quesUsed:false},
        {id:14,quizTitle:'The term "D-Day" refers to',quesOptions:['The Allied invasion of the coast of Normandy','The Allied Invasion of Southern France','The Allied Invasion of Italy','The Soviet Invasion of Germany'],correctIndex:0, quesFeed:'"D-Day" is a ubiqitous term meaning the day an operation kicks off.In this context it refers to the Allied landings o n the French Normandy Coast on June 6th, 1994.',quesUsed:false},
        {id:15,quizTitle:'The Battle of the Bulge refers to',quesOptions:['The American breakout through the hedgerow country','The Cherkassy Bulge','The German summer counteroffensive at Kursk','The German winter counteroffensive on the Western Front'],correctIndex:3, quesFeed:'The Germans launched Operation Wacht am Rhein (Watch on the Rhine) in December 1944, intended to cut the Allied lines and capture the Belgian port of Antwerp.',quesUsed:false}
    ]
}

/***********************************************************
 Renderer functions
 ************************************************************/

//rendering question
var addToHTML = function(quiz,stats)
{
    $('.js-quiz-ques-container').empty()
    var strHTML = '\t<label class="js-quiz-ques-num">' + stats.counter + '/10 : ' + quiz.quizTitle + '</label><br>' +
        '<input id="js-quiz-ques-option-1" type="radio" name="quiz-ques-opt" value="0" required>' + quiz.quesOptions[0] + '<br>' +
        '<input id="js-quiz-ques-option-2" type="radio" name="quiz-ques-opt" value="1" required>' + quiz.quesOptions[1] + '<br>' +
        '<input id="js-quiz-ques-option-3" type="radio" name="quiz-ques-opt" value="2" required>' + quiz.quesOptions[2] + '<br>' +
        '<input id="js-quiz-ques-option-4" type="radio" name="quiz-ques-opt" value="3" required>' + quiz.quesOptions[3] + '<br>'
    // console.log(strHTML)
    $('.js-quiz-ques-container').append(strHTML)
}

//feedback page renderen

var showFeedback = function(flag,feed,stats)
{
    $('.js-response').empty()
    $('.js-response-details').empty()
    $('.form-container').hide()
    if(flag)
        $('.js-response').append('Correct!!!')
    else
        $('.js-response').append('Wrong!!!')

    $('.js-response-details').append(feed)

    if(stats.counter===5){
        $('.next-button').hide()
        $('.final-button').show()
    }
    else
    {
        $('.next-button').show()
        $('.final-button').hide()
    }
    $('.ques-resp-screen').show()

}

var renderSummaryUI = function (stats) {
    $('.js-result').empty()
    var strHTML = 'You got ' + stats.correctQ + ' questions out of ' + stats.counter + ' questions correct'
    $('.js-result').append(strHTML)
    $('.result-screen').show();

}

//reset UI to first page
var resetUI = function () {
    $('.first-screen').show();
    $('.form-container').hide();
    $('.ques-resp-screen').hide();
    $('.result-screen').hide();
}

/***********************************************************
 Proccessor functions
 ************************************************************/

//Helper to render question
var renderQuestion = function (quizQuesBank,stats) {
    stats.counter++;
    addToHTML(quizQuesBank.quizQues[stats.counter],stats)
}

//Answer validator

var validateAnswer = function (quizQuesBank,stats,response) {
    if(parseInt(response) === quizQuesBank.quizQues[stats.counter].correctIndex) {
        stats.correctQ++;
        showFeedback(true, quizQuesBank.quizQues[stats.counter].quesFeed,stats)
    }
    else {
        stats.wrongQ++;
        showFeedback(false, quizQuesBank.quizQues[stats.counter].quesFeed,stats)
    }
}

//summary
var renderSummary = function(stats)
{
    renderSummaryUI(stats)
}

//resetting
var resetStats = function (stats) {
    stats.counter=0;
    stats.totalQues = 0
    stats.correctQ = 0
    stats.wrongQ=0
    resetUI()
}

/***********************************************************
Event Listeners
************************************************************/
//first page listener
$('.start-button').click(function(event) {
    $('.first-screen').hide();
    renderQuestion(quizQuesBank,stats)
    $('.form-container').show();
});

//form page listener
$('#js-quiz-app-form').submit(function(event) {
    event.preventDefault();
    console.log($('input[name=quiz-ques-opt]:checked').val())
    validateAnswer(quizQuesBank,stats,$('input[name=quiz-ques-opt]:checked').val())
});

//feedback page listener
$('.next-button').click(function(event) {
    console.log("current counter " + stats.counter)
    $('.ques-resp-screen').hide();
    renderQuestion(quizQuesBank,stats)
    $('.form-container').show();
});

//final button listener
$('.final-button').click(function(event) {
    $('.ques-resp-screen').hide();
    renderSummary(stats)
    $('.result-screen').show();
});

//"Start Over" Listener
$('.start-over-button').click(function(event) {
    event.preventDefault();
    resetStats(stats)


});
/***********************************************************
Initializer
************************************************************/
//initializing the UI

$()
{
    resetStats(stats)
}


