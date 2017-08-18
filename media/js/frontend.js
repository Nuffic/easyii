$(function(){
    $('.easyiicms-edit').each(function(i, element){
        var $this = $(element);
        $this.append('<a href="'+$this.data('edit')+'" class="easyiicms-goedit" style="width: '+$this.width()+'px; height: '+$this.height()+'px;" target="_blank"></a>');
    });
    $('#easyii-navbar input').switcher({copy: {en: {yes: '', no: ''}}}).on('change', function(){
       var checkbox = $(this).find('input');
       checkbox.switcher('setDisabled', true);
       var url = checkbox.is(':checked') ? checkbox.attr('data-on-link') : checkbox.attr('data-off-link');
       location.href = url;
    });;
});