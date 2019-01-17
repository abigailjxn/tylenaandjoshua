let rsvpModal = window.typeformEmbed.makePopup("https://abigailjackson.typeform.com/to/T2U6Tu", {
        hideHeaders: true,
        hideFooter: true
    })


$("#rsvp-btn").on("click", function(){
    rsvpModal.open();
});
 