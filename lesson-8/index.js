$mobMenuOpener = $('#mob-menu-opener');
$mobMenu = $('#mob-menu');

function toggleMobMenu() {
  $mobMenu.toggle('fast');
}

$mobMenuOpener.on('click', toggleMobMenu);
