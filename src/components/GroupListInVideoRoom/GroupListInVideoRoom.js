import React, { useState } from 'react';
import styles from './GroupListInVideoRoom.module.css';

import { sendMailToMembers } from '../../api';
import CompleteButton from '../CompleteButton/CompleteButton';

const GroupListInVideoRoom = ({
  groups,
  sender
}) => {
  const [isShowMembers, setIsShowMembers] = useState(false);
  const [clickedGroupId, setClickedGroupId] = useState("");
  const [membersToShow, setMembersToShow] = useState([]);

  const roomLink = document.location.href;

  const onGroupNameClick = (clickedGroupId) => {
    if (!clickedGroupId) {
      alert('초대할 그룹을 선택해주세요!');
      return;
    }
    setIsShowMembers(!isShowMembers);
    setClickedGroupId(clickedGroupId);

    groups.forEach((group) => {
      if (group._id === clickedGroupId) {
        setMembersToShow(group.members);
      }
    });
  };

  return (
    <div className={styles.GroupListInVideoRoom}>
      <div className={styles.Title}> INVITE YOUR MEMBERS </div>
      <div className={styles.SendMailButton}>
        <CompleteButton
          buttonName="Send Mail"
          onClick={() => sendMailToMembers(sender, membersToShow, roomLink, clickedGroupId)} />
      </div>
      <div className={styles.GroupListWrapper}>
        {
          groups.length
            ? groups.map((group, index) => {
              return (
                <>
                  <div className={styles.GroupEntry}>
                    <label htmlFor={index} className={styles.GroupLabel}>
                      <input type='radio' name='groupCheckbox' id={index} />
                      <div
                        key={index}
                        id={group._id}
                        className={styles.GroupName}
                        onClick={e => onGroupNameClick(e.target.id)} >
                        {group.name}
                      </div>
                    </label>
                  </div>
                  {
                    isShowMembers &&
                    group._id === clickedGroupId &&
                    <div className={styles.MemberList}>
                      {
                        membersToShow.map((member) => {
                          return (
                            <div className={styles.MemberEntry}>
                              {member}
                            </div>
                          );
                        })
                      }
                    </div>
                  }
                </>
              );
            })
            : <div className={styles.NoGroupDescription}>
              <p>등록된 Group이 없습니다!</p>
              <p>Member를 추가해 Group을 등록해 두면 이 곳에서 초대링크를 보낼 수 있습니다!</p>
              <p>Group을 추가해 주세요!</p>
            </div>
        }
      </div>
    </div >
  );
};

export default GroupListInVideoRoom;
