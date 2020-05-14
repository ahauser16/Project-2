let init = () => {
    $('#searchBtn').on('click', (e) => {
        let searchFeature = checkActive();

        console.log(searchFeature)
        console.log(grabSearchValue())
        console.log('/api/profiles/' + searchFeature + '/')
        if(grabSearchValue()){
            let userQuery = grabSearchValue();
        $.ajax({
            url: '/api/profiles/' + searchFeature + '/' + userQuery, 
            method: 'GET'
        }).then(data => {
            console.log(data)
            populateProfiles(data)
        })
    }

    })

    let grabSearchValue = () => {
        let searchQuery = $('#userSearch').val().trim();

        if(searchQuery.length > 1){
            return searchQuery;
        }else{
            return false;
        }
    }

    let checkActive = () => {
        let activeFeature = '';
        //console.log($('#searchCats')[0].children)
        for(let a of $('#searchCats')[0].children){
            if($(a)[0].classList[$(a)[0].classList.length - 1] === 'active'){
                activeFeature = $(a)[0].children[0].dataset.searchname;
            }   
        }
        return activeFeature;
    }

    setupAddProfileModal();
};

let setupAddProfileModal = () => {
    let profileName = $('<div>').attr('class', 'form-group').attr('id', 'profileName');
    $('#addProfile .modal-body').append(profileName)
    $('#profileName').append($('<label>').attr('for', 'profileNameInput').text('Profile Name: (Required)'));
    $('#profileName').append($('<input>').attr('id', 'profileNameInput').attr('type', 'text').attr('class', 'form-control'));

    let authorName = $('<div>').attr('class', 'form-group').attr('id', 'authorName');
    $('#addProfile .modal-body').append(authorName)
    $('#authorName').append($('<label>').attr('for', 'authorNameInput').text('Author Name: (Required)'));
    $('#authorName').append($('<input>').attr('id', 'authorNameInput').attr('type', 'text').attr('class', 'form-control'));

    let profileImage = $('<div>').attr('class', 'form-group').attr('id', 'profileImage');
    $('#addProfile .modal-body').append(profileImage)
    $('#profileImage').append($('<label>').attr('for', 'profileImageInput').text('Profile Image: (Required)'));
    $('#profileImage').append($('<input>').attr('id', 'profileImageInput').attr('type', 'text').attr('class', 'form-control'));

    let newBTN = $('<button>').attr('id', 'addnewProfileBtn').attr('class', 'btn btn-default text-left').attr('type', 'button')
    newBTN.text('Add')
    $('#addProfile .modal-footer').append(newBTN);

    $('#addnewProfileBtn').on('click', (e) => {
        let imageReg = /(http(s?):)*\.(?:jpg|jpeg|gif|png)/g;
        let checked = 0;

        if($('#profileNameInput').val().length > 0){
            checked++;
            $('#profileNameInput').css('border', 'none');
        }else{
            $('#profileNameInput').css('border', '1px solid red');
        }

        if($('#authorNameInput').val().length > 0){
            checked++;
            $('#authorNameInput').css('border', 'none');
        }else{
            $('#authorNameInput').css('border', '1px solid red');
        }

        if(imageReg.exec($('#profileImageInput').val())){
            $('#profileImageInput').css('border', 'none');
            checked++;
        }else{
            $('#profileImageInput').css('border', '1px solid red');
        }

        
        
        
        
        if(checked === 6){
            let newProfile = {
                name: $('#profileNameInput').val().trim(),
                author: $('#authorNameInput').val().trim(),
                image_URL: $('#profileImageInput').val().trim()
            }

            $.ajax({
                url: '/api/profiles/', 
                method: 'POST',
                data: newProfile
            }).then(data => {
                $('#profileName').val('');
                $('#authorName').val('');
                $('#profileImage').val('');
                $('#addProfile').modal('hide');
            });
        }

    })
}


let populateProfiles = (profiles) => {
    console.log(profiles);
    $('#profileContainer').empty();
    for(let a in profiles){

        let newProfile = $('<div>').attr('id', 'profile_' + a).attr('class', 'profileDiv float-left')
        $('#profileContainer').append(newProfile);

        let profileImgHolder = $('<div>').attr('class', 'profileImgHolder')
        $('#profile_' + a).append(profileImgHolder);
        
        let newProfileImg = $('<img>').attr('src', profiles[a].image_URL).attr('class', 'rounded').attr('width', '200px').attr('height', '300px')
        $('#profile_' + a + ' .profileImgHolder').append(newProfileImg);

        let newName = $('<h5>').attr('class', 'h5 text-center').text(profiles[a].name);
        $('#profile_' + a).append(newName);

        let newAuthor = $('<h5>').attr('class', 'h5 text-center').text(profiles[a].author);
        $('#profile_' + a).append(newAuthor);
    }

    let contentHeight = $("#content").height();
    $('#profileContainer').css('height', contentHeight + 'px');
}


init();