import iMenu from './menu.vue';
import iMenuGroup from './menu-group.vue';
import iMenuItem from './menu-item.vue';
import iSubmenu from './submenu.vue';
import fMenu from './fmenu.vue';
import fMenuGroup from './fmenu-group.vue';
import fMenuItem from './fmenu-item.vue';
import fSubmenu from './fsubmenu.vue';

iMenu.Group = iMenuGroup;
iMenu.Item = iMenuItem;
iMenu.Sub = iSubmenu;
fMenu.Group = fMenuGroup;
fMenu.Item = fMenuItem;
fMenu.Sub = fSubmenu;

export { iMenu, fMenu }