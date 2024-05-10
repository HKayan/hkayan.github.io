$(document).ready(function(){
    $('.image-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
});

$(document).ready(function() {
    $("#contact-form form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        // Handle Language Learning data
        $.each(data.LanguageLearning, function(key, val) {
            var item = '<div class="lan-learn-blog"><h3>' + val.title + '</h3><img class="blog-img" src="' + val.image + '" alt="' + val.title + '"><div class="content"><p class="shortText">' + val.content.substring(0, 100) + '...</p><p class="fullText" style="display:none;">' + val.content + '</p><button class="toggleButton">Read More/Less</button></div>';
            $('#language-learning-container').append(item);
        });

        // Handle Learning Environment data
        $.each(data.LearningEnvironment, function(key, val) {
            var item = '<div class="lear-env-blog"><h3>' + val.title + '</h3><img class="blog-img" src="' + val.image + '" alt="' + val.title + '"><div class="content"><p class="shortText">' + val.content.substring(0, 100) + '...</p><p class="fullText" style="display:none;">' + val.content + '</p><button class="toggleButton">Read More/Less</button></div>';
            $('#learning-environment-container').append(item);
        });

        // Handle Personal Reflections data
        $.each(data.PersonalReflections, function(key, val) {
            var item = '<div class="pers-ref-blog"><h3>' + val.title + '</h3><img class="blog-img" src="' + val.image + '" alt="' + val.title + '"><div class="content"><p class="shortText">' + val.content.substring(0, 100) + '...</p><p class="fullText" style="display:none;">' + val.content + '</p><button class="toggleButton">Read More/Less</button></div>';
            $('#personal-reflections-container').append(item);
        });

        // Attach click handlers after items are appended
        $('.toggleButton').on('click', function() {
            var fullText = $(this).siblings('.fullText');
            var shortText = $(this).siblings('.shortText');
            if (fullText.css('display') === 'none') {
                fullText.css('display', 'block');
                shortText.css('display', 'none');
            } else {
                fullText.css('display', 'none');
                shortText.css('display', 'block');
            }
        });
    });

    const details = document.querySelector('details');
    const summary = document.getElementById('summary');

    details.addEventListener('toggle', function() {
        summary.style.display = details.open ? 'none' : 'block';
    });
});
