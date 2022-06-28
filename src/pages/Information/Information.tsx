import React, {useState} from 'react';
import './Information.css';
import classNames from "classnames";
import { Theme, useThemeContext} from '../../context/themeModeContext';
import Button from '../../components/Button';


const Information = () => {
    const {theme, onChangeTheme = () => {}} = useThemeContext();
    const isLightTheme = theme ===Theme.Light;

    const [tabName,setTabName] = useState('1');
const activeTab = (i: string) => {
setTabName (i);
};
const tabs = [
  { tabName: "Tab 1", id: "1" },
  { tabName: "Tab 2", id: "2" },
  { tabName: "Tab 3", id: "3" },
];
const modelText = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
];

    return (
      <div 
      className={classNames( 
        {['info-wrapper']:isLightTheme}, 
        {[' info-wrapper dark'] : !isLightTheme})}>
        <div className='info-wrap'>
            <div className='info-title'>Information</div>
          <div className='btnsInfo'>
          {tabs.map((tab) => {
            return (
              <Button
                key={tab.id}
                className={classNames("btnInfo", {
                  ["btnInfoActiveTabs"]: tab.id === tabName,
                })}
                btnText={tab.tabName}
                onClick={() => activeTab(tab.id)}
              />
            );
          })}
        </div>
        <div className="infoContentWrapper">
          <p>
            {tabName === "1"
              ? modelText[0]
              : tabName === "2"
              ? modelText[1]
              : modelText[2]}
          </p>
        </div>
      </div>
    </div>
  );
};


        {/* <Button className={tabName === 1 ? 'btnInfo active-tabs': 'btnInfo'} btnText='Tab 1' onClick={()=>activeTab(1)}/>
        <Button className={tabName === 2 ? 'btnInfo active-tabs': 'btnInfo'} btnText='Tab 2' onClick={()=>activeTab(2)}/>
        <Button className={tabName === 3 ? 'btnInfo active-tabs': 'btnInfo'} btnText='Tab 3' onClick={()=>activeTab(3)}/>
          </div>
          <div className='info-content-wrapper'>
<p className={tabName === 1 ? 'info-content active-content': 'info-content'}> 
какой-то текст<br/>
акой-то текст.<br/>
</p>
<p className={tabName === 2 ? 'info-content active-content': 'info-content'}>
какой-то текст,<br/>
какой-то текст.<br/>
</p>
<p className={tabName === 3 ? 'info-content active-content': 'info-content'}>
какой-то текст,<br/>
какой-то текстт,<br/>
какой-то текст,<br/>
</p>
          </div>
        </div>
    </div>
    )
} */}

export default Information;