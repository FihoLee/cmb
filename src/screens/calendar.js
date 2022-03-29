import React, { useState, useContext, useEffect} from 'react';
import "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/index";
import { getMonth } from "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/util";
import Month from "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/components/Month";
import GlobalContext from "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/context/GlobalContext";
import EventModal from "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/components/EventModal";
import Sidebar from "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/components/Sidebar";
import CalendarHeader from "/Users/alyissasanders/Library/Mobile Documents/com~apple~CloudDocs/my-app/Coding-Mythbusters/src/components/CalendarHeader";


function Calendar() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
       <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Calendar;
