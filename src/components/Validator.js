import $ from 'jquery';

$("inputs.valid").map(function(){
    console.log($(this).val());
})