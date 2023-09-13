$(document).ready(function() {
    const checkboxes = $(":checkbox");
    
    checkboxes.change(function() {
        const checkedCount = checkboxes.filter(":checked").length;
        
        if (checkedCount >= 3) {
            checkboxes.attr("disabled", true);
        }
    });
});