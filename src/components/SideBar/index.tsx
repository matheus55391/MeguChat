import { SidebarAsideWrapper } from "./components/SideBarAsideWrapper";
import { SideBarChatItem } from "./components/SideBarChatItem";
import { SideBarSearchInput } from "./components/SideBarSearchInput";
import { SideBarTitle } from "./components/SideBarTitle";
import { SidebarVerticalScroll } from './components/SidebarVerticalScroll'

const SideBar = {
    Root: SidebarAsideWrapper,
    Title: SideBarTitle,
    VerticalScroll: SidebarVerticalScroll,
    ChatItem: SideBarChatItem,
    SearchInput: SideBarSearchInput,
}

export default SideBar