(function(){
    var editors = 'strengths weaknesses opportunities threats'
    .split(' ')
    .map(type => {
        new MediumEditor(`.${type}`);
    });
}())