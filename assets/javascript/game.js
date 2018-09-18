var constantine = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1
}

var dresden = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1
}

var potter = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1
}

var strange = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1
}

var choices = $(".char").click(function() {
    if ($(event.currentTarget).parent()[0] === $("#select")[0]) {
        $(event.currentTarget).addClass("chosen").removeClass("neutral")
        $("#yourchar").append(event.currentTarget)
        $("#enemies").append($("#select").children())
    } else if ($(event.currentTarget).parent()[0] === $("#enemies")[0] && $("#defender").children().length === 0) {
        $(event.currentTarget).addClass("enemy").removeClass("neutral")
        $("#defender").append(event.currentTarget)
    }
})

