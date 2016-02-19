function ideaApp() {

    function Idea(id,userid,title,description,color){

        this.id = id;
        this.userid = userid;
        this.title = title;
        this.description = description;
        this.color = color;

    }


    var newIdea = new Idea();
    newIdea.id = '';
    newIdea.userid = '';
    newIdea.title = '';
    newIdea.description = '';
    newIdea.color = '';

    var color = '';
    var ideaList = [];

    function createIdea() {
        newIdea.title = $('#new-title').val();
        newIdea.description = $('#new-description').val();
        newIdea.userid = 'me';
        newIdea.color = color;
        ideaList.push(newIdea);

        $.post( "addidea.php", { posttitle: newIdea.title, postdescription: newIdea.description, postuserid: newIdea.userid, postcolor: newIdea.color},
            function(){
                getIdea();
            } );

    }

    function getIdea(){

        $.get(
            "returndata.php",
            { postuserid: 'me' },
            function(data){
                var gotdata = JSON.parse(data);

                ideaList = gotdata;

                generateIdeas();

            }
        );

    }  getIdea();

    function addSingle(){
        var thiscolor =  newIdea.color;
        var container = '<div class="idea-box flipInX animated" data-toggle="modal" data-target="#updateModal" style="background:' + thiscolor +';"> <div class="idea-inner good">';
        var titlehtml = '<p id="boxtitle">' +  newIdea.title + '</p></div></div>';
        var alltogether = container + titlehtml;
        $('.idea-box:last-child').before(alltogether);
        setTimeout(function(){
            $('.idea-box').removeClass('flipInX animated');
        }, 1000);
    }

    function generateIdeas(){
        $('#app .container').html('');
        $('#app .container').append(' <div id="start" class="idea-box" data-toggle="modal" data-target="#newModal"> <div class="idea-inner"> <p>New Idea</p> </div> </div>');
        for(i=0; i < ideaList.length; i++){
            var thiscolor =  ideaList[i].color;
            var container = '<div class="idea-box" data-toggle="modal" data-target="#updateModal" style="background:' + thiscolor +';"> <div class="idea-inner good">';
            var titlehtml = '<p id="boxtitle">' +  ideaList[i].title + '</p></div></div>';
            var alltogether = container + titlehtml;
            $('.idea-box:last-child').before(alltogether);

        }
    }



    $('#newbutton').on('click', function(){
        event.preventDefault();
        createIdea();
        addSingle();
        $('#new-title').val('');
        $('#new-description').val('');

    });

    var element = '';

$('html').on('click', '.idea-box', function(){

    var that = this;

    function updateIdea() {

        element = $('.idea-box').index(that);

        $('#update-title').val(ideaList[element].title);
        $('#update-description').val(ideaList[element].description);

        var thatcolor = ideaList[element].color;

        $('.btn').css({
            'border-color': thatcolor,
            'color': '#fff',
            'background-color': thatcolor
        });

        $('#update-description').css({
            'border-color': thatcolor,
            'color': thatcolor
        });
        $('#update-title').css({
            'border-color': thatcolor,
            'color': thatcolor
        });


    }
     updateIdea(that);



});

    $('#removeall').on('click', function(){
        $.post( "deleteall.php");
        ideaList = [];
        generateIdeas();
    });

    $('#updatebutton').on('click', function(){
        event.preventDefault();

        function postupdate(){
            ideaList[element].title = $('#update-title').val();
            ideaList[element].description = $('#update-description').val();

            if(ideaList[element].color != color){
                ideaList[element].color = color;
            }
            $.post(
                "update.php",
                {
                    posttitle:  ideaList[element].title,
                    postdescription:  ideaList[element].description,
                    postid:  ideaList[element].id,
                    postcolor:  ideaList[element].color
                }, function() {
                    generateIdeas();
            })
        }
        postupdate();



        $('#new-title').val('');
        $('#new-description').val('');


    });



    $('.colorpicker').on('click', function() {
        color = $(this).css('background-color');

    });


    $('.colorpicker').on('click', function(){
        var color = $(this).css('background-color');
        $('.btn').css({
            'border-color': color,
            'color': '#fff',
            'background-color': color
        });

        $('#new-description').css({
            'border-color': color,
            'color': color
        });
        $('#new-title').css({
            'border-color': color,
            'color': color
        });

    });


    $('.colorpicker').on('click', function(){
        var thiscolor = $(this).css('background-color');
        color = thiscolor;
        $('.btn').css({
            'border-color': thiscolor,
            'color': '#fff',
            'background-color': thiscolor
        });

        $('#update-description').css({
            'border-color': thiscolor,
            'color': thiscolor
        });
        $('#update-title').css({
            'border-color': thiscolor,
            'color': thiscolor
        });

    });


}

ideaApp();