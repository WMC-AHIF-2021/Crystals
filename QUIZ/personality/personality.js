var prompts = [
    {
        prompt: 'I find it difficult to introduce myself to people',
        weight: -1,
        class: 'group0'

    },
    {
        prompt: 'I like to spend time alone',
        weight: -1,
        class: 'group1'
    },
    {
        prompt: 'I do not usually start conversations',
        weight: -1,
        class: 'group2'
    },
    {
        prompt: 'I prefer not to engage with people who seem angry or upset',
        weight: -1,
        class: 'group3'
    },
    {
        prompt: 'I choose my friends carefully',
        weight: -1,
        class: 'group4'
    },
    {
        prompt: 'I find it difficult to tell about myself',
        weight: -1,
        class: 'group5'
    },
    {
        prompt: 'I am usually highly motivated and energetic',
        weight: 1,
        class: 'group6'
    },
    {
        prompt: 'I find it easy to walk up to a group of people and join in conversation',
        weight: 1,
        class: 'group7'
    },
    {
        prompt: 'Being adaptable is more important than being organized',
        weight: 1,
        class: 'group8'
    },
    {
        prompt: 'I care more about making sure no one gets upset than winning a debate',
        weight: 1,
        class: 'group9'
    },
    {
        prompt: 'I often do not feel that I have to explain myself to people',
        weight: 1,
        class: 'group10'
    },
    {
        prompt: 'I would rather improvise than spend time to make a plan',
        weight: 1,
        class: 'group11'
    }

]

var prompt_values = [
    {
        value: 'Strongly Agree',
        class: 'btn-default btn-strongly-agree',
        weight: 5
    },
    {
        value: 'Agree',
        class: 'btn-default btn-agree',
        weight: 3,
    },
    {
        value: 'Neutral',
        class: 'btn-default neutral',
        weight: 0
    },
    {
        value: 'Disagree',
        class: 'btn-default btn-disagree',
        weight: -3
    },
    {
        value: 'Strongly Disagree',
        class: 'btn-default btn-strongly-disagree',
        weight: -5
    }
]

function createPromptItems() {

    for (var i = 0; i < prompts.length; i++) {
        var prompt_li = document.createElement('li');
        var prompt_p = document.createElement('p');
        var prompt_text = document.createTextNode(prompts[i].prompt);

        prompt_li.setAttribute('class', 'list-group-item prompt');
        prompt_p.appendChild(prompt_text);
        prompt_li.appendChild(prompt_p);

        document.getElementById('quiz').appendChild(prompt_li);
    }
}
/*const container = document.querySelector('.blogs');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += ` 
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="/index.html">read more...</a>
           
            </div>
        `
    })
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderPosts());*/

function createValueButtons() {
    for (var li_index = 0; li_index < prompts.length; li_index++) {
        var group = document.createElement('div');
        group.className = 'btn-group btn-group-justified';

        for (var i = 0; i < prompt_values.length; i++) {
            var btn_group = document.createElement('div');
            btn_group.className = 'btn-group';

            var button = document.createElement('button');
            var button_text = document.createTextNode(prompt_values[i].value);
            button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
            button.appendChild(button_text);

            btn_group.appendChild(button);
            group.appendChild(btn_group);

            document.getElementsByClassName('prompt')[li_index].appendChild(group);
        }
    }
}

createPromptItems();
createValueButtons();

//Total of selected values = if total is negative --> introverted, total is positive = extroverted
//sum of all the answers (wright of the value * weight of prompts)
var total = 0;

function findPromptWeight(prompts, group) {
    var weight = 0;

    for (var i = 0; i < prompts.length; i++) {
        if (prompts[i].class === group) {
            weight = prompts[i].weight;
        }
    }
    return weight;
}

function findValueWeight(values, value) {
    var weight = 0;

    for (var i = 0; i < values.length; i++) {
        if (values[i].value === value) {
            weight = values[i].weight;
        }
    }

    return weight;
}

//shows what you clicked
$('.value-btn').mousedown(function () {
    var classList = $(this).attr('class');
    // console.log(classList);
    var classArr = classList.split(" ");
    // console.log(classArr);
    var this_group = classArr[0];
    // console.log(this_group);

    //if the button has been selected, de-select it by click,
    // if not de-select any selected buttons and select the one just clicked
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    } else {
        // $('[class='thisgroup).prop('checked', false);
        total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        // console.log($('.'+this_group+'.active').text());
        $('.'+this_group).removeClass('active');

        $(this).addClass('active');
        total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    }
    console.log(total);
})

// document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
// console.log(document.getElementById('intro-bar').style.width);
// document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';

$('#submit-btn').click(function () {
    $('.results').removeClass('hide');
    $('.results').addClass('show');

    if(total < 0) {
        document.getElementById('results').innerHTML = '<b>You are a introverted person!</b><br><br>\
		Introverts are tricky to understand, since it’s so easy to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people.\n\
<br><br>\
For introverts, to be alone with their thoughts is as restorative as sleeping, as nourishing as eating.\n\n\
<br><br>\
Introverted people are known for thinking things through before they speak, enjoying small, close groups of friends and one-on-one time, needing time alone to recharge, and being upset by unexpected changes or last-minute surprises. Introverts are not necessarily shy and may not even avoid social situations, but they will definitely need some time alone or just with close friends or family after spending time in a big crowd.\
<br><br>\
\The best crystals you can wear as a jewerly for introvert people are:\
<br><br>\
 \- Black Torumaline -> It protecs your Energy.\
 <br>\
 \- Red Jasper -> It encoures you to take actions and experiences you wouldnt typically make\
 <br>\
 \- Citrine -> It gives you self-coinfidence\
 <br>\
 \- Kunzite -> It opens your heart up to the world\
 <br>\
 \- Blue Lace Agate -> It helps you to show your authentic self with more confidence\
 <br>\
 \- Lepidolite -> It offers you support to work through anxiety\
		';
    } else if(total > 0) {
        document.getElementById('results').innerHTML = '<b>You are a extroverted person!</b><br><br>\
		On the opposite side of the coin, people who are extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge from time spent alone focusing or working hard.\
<br><br>\
When extroverted people are among other people, they make eye contact, smile, maybe chat if there’s an opportunity. As an extrovert, that’s a small ‘ping’ of energy, a little positive moment in the day.\
<br><br>\
\The best crystals you can wear as a jewerly if you are extrovert are:\
<br><br>\
\- Hematite -> It grounds your energy\
<br>\
\- Sodalite - It nurtruring your communication and make you think before speaking.\
<br>\
\- Kunzite -> It balances your mental and emotional aspects\
<br>\
\- Amethyst -> It helps your turning your facilitates inward and developing and trusting intuition rather than physical facts\
';
    } else {
        document.getElementById('results').innerHTML = '<b>You are ambiverted!</b><br><br>\
		Since introverts and extroverts are the extremes of the scale, the rest of people fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
<br><br>\
So let’s look at how an ambivert compares.\
<br><br>\
Ambiverts exhibit both extroverted and introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.'
    }

    // Hide the quiz after they submit their results
    $('#quiz').addClass('hide');
    $('#submit-btn').addClass('hide');
    $('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
    $('#quiz').removeClass('hide');
    $('#submit-btn').removeClass('hide');
    $('#retake-btn').addClass('hide');

    $('.results').addClass('hide');
    $('.results').removeClass('show');
})