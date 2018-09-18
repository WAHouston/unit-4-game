var constantine = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#jchp")
}

var dresden = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#hdhp")
}

var potter = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#hphp")
}

var strange = {
    baseHp: 10,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#dshp")
}

var statReset = function(char){
    char.hp = char.baseHp
    char.pow = char.basePow
    char.disHp.text(char.hp)
}

var reset = function() {
    $("#select").append($(".char"))
    $(".char").addClass("neutral").removeClass("chosen").removeClass("enemy")
    statReset(constantine)
    statReset(dresden)
    statReset(potter)
    statReset(strange)
}

$(".char").click(function() {
    if ($(event.currentTarget).parent()[0] === $("#select")[0]) {
        $(event.currentTarget).addClass("chosen").removeClass("neutral")
        $("#yourchar").append(event.currentTarget)
        $("#enemies").append($("#select").children())
    } else if ($(event.currentTarget).parent()[0] === $("#enemies")[0] && $("#defender").children().length === 0) {
        $(event.currentTarget).addClass("enemy").removeClass("neutral")
        $("#defender").append(event.currentTarget)
    }
})

$("#attack").click(function() {

})

$("#restart").click(reset)

reset()