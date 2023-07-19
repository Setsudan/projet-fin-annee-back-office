import React from 'react';
// import UserChip from '@components/userChip/userChip.component';
import { HiXMark } from 'react-icons/hi2';
import './logsContainer.styles.scss';
import { LogsContainerProps } from '@interface/components.props';

const LogsContainer: React.FC<LogsContainerProps> = ({ dataContent }) => {
	return (
		<div className="containerLogs">
			<div className="contentLogsContainer">
				<div className="lineDecoration"></div>
				<div className="headerLogsContainer">
					<HiXMark color="white" size={38} className="closeIcon" />
				</div>

				<div className="allLogs">
					{dataContent.map((content, index) => (
						<div key={index}>
							{/* <UserChip
                userInfo={
                  
                }
							/> */}
							<div className="stepLog" key={index}>
								<div className="pointLog"></div>
								<div className="contentLog">
									<h3>{content.title}</h3>
									<p>{content.date}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LogsContainer;
