import React, { useState, useEffect } from 'react';
import styles from './GroupContent.module.css';
import GroupList from '../GroupList/GroupList';
import ExistMemberList from '../MemberList/MemberList';

const GroupContent = (props) => {
  const {
    title,
    currentUser,
    setShowModal,
    setgroupId,
    showMember,
    setShowMember,
    existMember,
    setExistMember
  } = props;

  const [checkedGroup, setCheckedGroup] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  console.log('checkedGroup', checkedGroup)
  console.log('isFetched Deleting Group', isFetched);
  //const groups = currentUser.Groups;
  //GroupList groups={groups}/> 에 넘겨주는 컴포넌트 currentUser.Groups로 바꿔야함.

  const groups = [// this is mock..
    { _id: 1, name: "Group1", members: [1, 2, 3] },
    { _id: 2, name: "Group2", members: [1, 2, 3] },
    { _id: 3, name: "Group3", members: [1, 2, 3] }
  ];

  const toggle = () => {
    console.log('Toggle deleteGroup');
    setIsFetched(!isFetched);
  };

  useEffect(() => {
    if (!isFetched) return;
    // deleteGroup(currentUser, checkedGroup);
    // 가져온 값으로 CurrentUser의 group정보 바꾸기. group을 따로 관리해야할까 currentUser하나면 될까?

    // [ Delete function ]
    // Group 페이지면 그룹 삭제, member페이지면 member 삭제
    setCheckedGroup([]);
    toggle();
  }, [isFetched]);

  const popupModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <label className={styles.Title}>{title}</label>
      <div>
        <button className={`${styles.Button} ${styles.AddGroupButton}`} onClick={popupModal}>Add</button>
        <button className={`${styles.Button} ${styles.DeleteGroupButton}`} onClick={toggle}>Delete</button>
      </div>
      {showMember ?
        <ExistMemberList
          existMember={existMember}
          setShowMember={setShowMember}
        /> :
        <GroupList
          groups={groups}
          checkedGroup={checkedGroup}
          setCheckedGroup={setCheckedGroup}
          setgroupId={setgroupId}
          setShowMember={setShowMember}
          setExistMember={setExistMember}
        />
      }
    </>
  );
};

export default GroupContent;
