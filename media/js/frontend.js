jQuery(function($){
    $('.easyiicms-edit').each(function(i, element){
        var $this = $(element);
        $this.append('<a href="'+$this.data('edit')+'" class="easyiicms-goedit" style="width: '+$this.width()+'px; height: '+$this.height()+'px;" target="_blank"></a>');
    });
    $('#easyii-navbar input').switcher({copy: {en: {yes: '', no: ''}}});
    $('#easyii-navbar .switcher').on('click', function () {
       var checkbox = $(this).find('input');
       checkbox.switcher('setDisabled', true);
       var checked = checkbox.is(':checked') ? 1 : 0;
       location.href = checkbox.attr('data-link') + checked + '/';
    });
});