/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        bind_navigation();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var bind_navigation = function(){

    var navbar_children = '    <div class="container-fluid">'+
    '        <!-- Brand and toggle get grouped for better mobile display -->'+
    '        <div class="navbar-header">'+
    '            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
    '                <span class="sr-only">Toggle navigation</span>'+
    '                <span class="icon-bar"></span>'+
    '                <span class="icon-bar"></span>'+
    '                <span class="icon-bar"></span>'+
    '            </button>'+
    '            <a id="page_back" class="navbar-brand" href="#"></a>'+
    '            <a id="nav_page_title" class="navbar-brand" href="#" style="padding-left: 30px;">Caldwell Zoo</a>'+
    '        </div>'+
    '        <!-- Collect the nav links, forms, and other content for toggling -->'+
    '        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
    '            <ul class="nav navbar-nav">'+
    '                <li><a class="home_link" href="#">Home</a></li>'+
    '                <li><a class="map_link" href="#">Map</a></li>'+
    '                <li class="dropdown exhibits-menu-list">'+
    '                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Exhibits<span class="caret"></span></a>'+
    '                <ul class="dropdown-menu" role="menu">'+
    '                    <li><a class="overview_link">Overview</a></li>'+
    '                    <li class="divider"></li>'+
    '                    <li><a class="savanna_link">African Savanna</a></li>'+
    '                    <li><a class="aquarium_link">African Aquarium</a></li>'+
    '                    <li><a class="namerica_link">North America</a></li>'+
    '                    <li><a class="herpetarium_link">North American Herpetarium</a></li>'+
    '                    <li><a class="samerica_link">South America</a></li>'+
    '                    <li><a class="wildbird_link">Wild Bird Walkabout</a></li>'+
    '                </ul>'+
    '                <li><a class="membership_link" href="#">Membership</a></li>'+
    '                <li><a class="about_link" href="#">About Caldwell Zoo</a></li>'+
    '            </li>'+
    '            </ul>'+
    '        </div>'+
    '    </div>';
    var nav = $('nav');
    nav_location = nav.attr('location');
    nav.addClass('navbar')
        .addClass('navbar-default')
        .addClass('navbar-inverse')
        .addClass('navbar-fixed-top')
        .append(navbar_children);
    var active_item = nav.find('.'+nav_location).closest('li');
    active_item.addClass('active');
    if (active_item.parent().closest('li').hasClass('exhibits-menu-list')){
        active_item.parent().closest('li').addClass('active');
    }

    var page_back = $('#page_back');
    var page_title = $('#nav_page_title');
    page_title.text(nav.attr('title'));
    back_title = nav.attr('previous_title');
    back_link = nav.attr('previous_link');
    page_back.empty();
    if (back_link!=undefined && back_title!=undefined){
        page_back.addClass(back_link).html('<span class="glyphicon glyphicon-chevron-left"></span>'+back_title);
    }


    $('.map_link').click(function(){
        window.location = 'map.html';
    });
    $('.home_link').click(function(){
        window.location = 'index.html';
    });
    $('.membership_link').click(function(){
        window.location = 'membership.html';
    });
    $('.about_link').click(function(){
        window.location = 'about.html';
    });
    $('.overview_link').click(function(){
        window.location = 'exhibit_overview.html';
    });
    $('.savanna_link').click(function(){
        window.location = 'exhibit_savanna.html';
    });
    $('.aquarium_link').click(function(){
        window.location = 'exhibit_aquarium.html';
    });
    $('.namerica_link').click(function(){
        window.location = 'exhibit_namerica.html';
    });
    $('.herpetarium_link').click(function(){
        window.location = 'exhibit_herpetarium.html';
    });
    $('.samerica_link').click(function(){
        window.location = 'exhibit_samerica.html';
    });
    $('.wildbird_link').click(function(){
        window.location = 'exhibit_wildbird.html';
    });
};

var local_news = {"events":[
    {"title":"Penguin Feeding",
        "dates":"Every day at 2:00 p.m.",
        "description":"Come see our penguins being fed."},
    {"title":"Snow Foolin'",
        "dates":"January 31, 1:30-3:30 p.m.",
        "description":"Brrrr...Stop by the African Huts for some really cool wintery crafts."},
    {"title":"My Heart Belongs To The Zoo",
        "dates":"February 14, 1:30-3:30 p.m.",
        "description":"Come on over to the African Huts and we'll help you create some special critter Valentines to give or keep."},
    {"title":"Poison Jungle Safari",
        "dates":"March 21, Noon-4:00 p.m.",
        "description":"It's time for our ninth annual poison safari. This event is held in cooperation with the North Texas Poison Control Center of Dallas. Booths throughout the zoo will alert adults and children to possible poison dangers in the home."},
    {"title":"Earth Day",
        "dates":"April 18, 1:00-4:00 p.m.",
        "description":"Join us as we &quot;party for the planet.&quot; The zoo joins local organizations to help all of us learn how we can make every day Earth Day."},
]};

var get_news = function () {
    $('.news-list').html('Loading...');
    // do ajax to retrieve
    $('.news-list').empty();
    $.each(local_news.events, function(idx, item){
        var itemtext = '<div class="news-title">'+item.title+'</div>';
        itemtext += '<div class="news-dates">'+item.dates+'</div>';
        itemtext += '<div class="news-description">'+item.description+'</div>';
        $('.news-list').append('<li class="list-group-item">'+itemtext+'</li>');
    });
};
