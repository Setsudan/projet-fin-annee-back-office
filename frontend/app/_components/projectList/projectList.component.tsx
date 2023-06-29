import "./projectList.styles.scss";
import Chip from "@components/chip/chip.components";
import {HiPlus} from "react-icons/hi2";
import Badge from "@components/badge/badge.component";

interface projectListProps {
    list: Array<{
        name: string,
        id: string
    }>
}

export default function ProjectList() {
    const list : projectListProps["list"] = [
        {
            name: "Project 1",
            id: "1"
        },
        {
            name: "Project 2",
            id: "2"
        },
        {
            name: "Project 3",
            id: "3"
        }
    ]

    return (
        <>
            <div className={`project_list`}>
                <div className={`project_list__header`}>
                    <h3>Projects</h3>
                    {list.map((item) => (
                        <Chip text={item.name} key={item.id} />
                    ))}
                </div>
                <Chip text="Create new project" icon={<Badge icon={<HiPlus/>} type='transparent' />} />
            </div>
        </>
    );
}
