$mobMenuOpener = $('#mob-menu-opener');
$mobMenu = $('#mob-menu');

console.log($mobMenu)

function toggleMobMenu() {
  $mobMenu.toggle('fast')
}

$mobMenuOpener.on('click', toggleMobMenu)