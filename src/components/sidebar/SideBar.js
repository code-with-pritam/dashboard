import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';
import {
    AddCircleOutlineOutlined,
    CodeOutlined,
    DrawOutlined,
    FolderOutlined,
    LocalConvenienceStoreOutlined,
    QuestionMarkOutlined,
} from "@mui/icons-material";

import "./sidebar.css";
import { Button, ButtonGroup } from "@mui/material";
import Mainbar from "../mainbar/Mainbar";

const SideBar = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar className="app">
                <Menu className="menu-1">
                    {/* Logo part */}
                    <div className="logo-bar">
                        <div className="main-logo">
                        </div>
                        <div className="logo-name">
                            <p className="inc" >INC</p>
                            <p className="hub" > Innovate-Hub</p>
                        </div>
                        <div className="profile-img"> 
                        </div>
                    </div>


                    <MenuItem icon={<DrawOutlined />}> Desingn team </MenuItem>
                    <MenuItem icon={<LocalConvenienceStoreOutlined />}>
                        {" "}
                        Marketing team{" "}
                    </MenuItem>
                    <MenuItem icon={<CodeOutlined />}> Development team </MenuItem>
                    <hr />
                    <MenuItem icon={<AddCircleOutlineOutlined />} className="create-team">
                        {" "}
                        Create a team{" "}
                    </MenuItem>
                    <hr />
                    <MenuItem className="folder">
                        {" "}
                        Folder{" "} <AddCircleOutlineOutlined className="foldericon" />
                    </MenuItem>

                    {/* start products */}
                    <SubMenu label="Products" icon={<FolderOutlined />}>
                        <MenuItem> Roadmap </MenuItem>
                        <MenuItem>Feedback</MenuItem>
                        <MenuItem>Perfomance</MenuItem>
                    </SubMenu>
                    {/* end products */}

                    {/* start Sales */}
                    <SubMenu label="Sales" icon={<FolderOutlined />}>
                        <MenuItem>Link 1</MenuItem>
                    </SubMenu>
                    {/* end Sales */}

                    {/* start Design */}
                    <SubMenu label="Design" icon={<FolderOutlined />}>
                        <MenuItem> Link 1 </MenuItem>
                        <MenuItem> Link 2 </MenuItem>
                        <MenuItem> Link3 </MenuItem>
                    </SubMenu>
                    {/* end Design */}
                    <MenuItem icon={<FolderOutlined />}>Office</MenuItem>
                    <MenuItem icon={<FolderOutlined />}> Legal </MenuItem>
                </Menu>
                <Menu className="menu-2">
                    <MenuItem icon={<PersonAddAltOutlinedIcon />}> Invite teammates </MenuItem>
                    <MenuItem icon={<QuestionMarkOutlined />}> Help and frist steps </MenuItem>
                    <MenuItem>7 day left on trial
                        <ButtonGroup  className="btn-last"
                            variant="contained"
                            aria-label="Disabled button group"
                        >
                            <Button>Add Billing</Button>
                        </ButtonGroup>
                    </MenuItem>

                </Menu>
            </Sidebar>
            <Mainbar />
        </div>
    );
};

export default SideBar;
