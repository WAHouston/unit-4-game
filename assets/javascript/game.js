var constantine = {
    baseHp: 100,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#jchp")
}

var dresden = {
    baseHp: 190,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#hdhp")
}

var potter = {
    baseHp: 120,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#hphp")
}

var strange = {
    baseHp: 1000,
    basePow: 1,
    hp: 10,
    pow: 1,
    counter: 1,
    disHp: $("#dshp")
}

var charArray = [constantine, dresden, potter, strange]

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
    if ($("#yourchar").children().length === 1 && $("#defender").children().length === 1) {
        var player
        var enemy
        for (var i = 0; i < charArray.length; i++) {
            if ($("#yourchar").children()[0] === charArray[i].disHp.parent()[0]) {
                player = charArray[i]
            } else if ($("#defender").children()[0] === charArray[i].disHp.parent()[0]) {
                enemy = charArray[i]
            }
        }
        enemy.hp = enemy.hp - player.pow
        player.pow = player.pow + player.basePow
        player.hp = player.hp - enemy.counter
        enemy.disHp.text(enemy.hp)
        player.disHp.text(player.hp)
    }
})

$("#restart").click(reset)

reset()