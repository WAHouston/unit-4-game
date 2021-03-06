var constantine = {
    baseHp: 100,
    basePow: 16,
    hp: 100,
    pow: 16,
    counter: 5,
    disHp: $("#jchp")
}

var dresden = {
    baseHp: 150,
    basePow: 6,
    hp: 150,
    pow: 6,
    counter: 20,
    disHp: $("#hdhp")
}

var potter = {
    baseHp: 120,
    basePow: 8,
    hp: 120,
    pow: 8,
    counter: 10,
    disHp: $("#hphp")
}

var strange = {
    baseHp: 180,
    basePow: 4,
    hp: 180,
    pow: 4,
    counter: 25,
    disHp: $("#dshp")
}

var charArray = [constantine, dresden, potter, strange]

var statReset = function(char){
    char.hp = char.baseHp
    char.pow = char.basePow
    char.disHp.text(char.hp)
}

var reset = function() {
    for (var i = 0; i < charArray.length; i++){
        $("#select").append(charArray[i].disHp.parent())
        statReset(charArray[i])
    }
    $(".char").addClass("neutral").removeClass("chosen").removeClass("enemy")
    $("#action").html("<p></p>")

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
        if (enemy.hp >= 1){
            player.hp = player.hp - enemy.counter
            $("#action").html("<p>You attacked " + $(enemy.disHp.parent().children()[0]).text() + " for " + player.pow + " damage." + "</p>")
            $("#action").append("<p>" + $(enemy.disHp.parent().children()[0]).text() + " attacked you for " + enemy.counter + " damage." + "</p>")
        } else {
            $(enemy.disHp.parent()).detach()
            $("#action").html("<p>You defeated " + $(enemy.disHp.parent().children()[0]).text() + ".  Choose another opponent.</p>")
        }
        if (player.hp < 1){
            $(player.disHp.parent()).detach()
            $("#action").html("<p>You were defeated. GAME OVER")
        }
        enemy.disHp.text(enemy.hp)
        player.disHp.text(player.hp)
        player.pow = player.pow + player.basePow
    }
})

$("#restart").click(reset)

reset()