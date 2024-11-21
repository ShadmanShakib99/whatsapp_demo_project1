import React from "react";

const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <div className="profile">
      <img src="/images/User Imag.png" alt="User" className="profile-image" />
        <h4>Shadman Shakib</h4>
      </div>

      {/*  search section */}
      <div className="search">
        <input type="text" placeholder="Search or start new chat" className="search-input" />
      </div>

      {/* chatList section */}
      <div className="chat-list">
        <div className="chat-item1">
          <img src="/images/oporentUser.png" alt="User" className="chat-avatar" />
          <div class="chat-info">
                   <h5>Jon </h5>
                      <span>13:20</span>
                  </div>
        </div>

        <div class="chat-item1">
            <img src="/images/Avatar2.png" alt="png" class="chat-avatar"/>
              <div class="chat-info">
                   <h5>Sohel Rana</h5>
                      <span>07:20</span>
                  </div>
                </div>

                <div class="chat-item1">
                  <img src="/images/User Imag.png" alt="png" class="chat-avatar"/>
                    <div class="chat-info">
                      <h5>Shakib(You)</h5>
                        <span>01-10-24</span>
                    </div>
                </div>

                <div class="chat-item1">
                    <img src="/images/Avatar1.png" alt="png" class="chat-avatar"/>
                    <div class="chat-info">
                        <h5>Muhammad Muhid</h5>
                        <span>01-09-24</span>
                    </div>
                </div>

                <div class="chat-item1">
                    <img src="/images/Avatar2.png" alt="png" class="chat-avatar"/>
                    <div class="chat-info">
                        <h5>Muhammad Ripon</h5>
                        <span>06-05-24</span>
                    </div>
                </div>

                <div class="chat-item1">
                    <img src="/images/Avatar4.png" alt="png" class="chat-avatar"/>
                    <div class="chat-info">
                        <h5>Hafiza</h5>
                        <span>01-01-24</span>
                    </div>
                </div>

                <div class="chat-item1">
                    <img src="/images/Avatar3.png" alt="png" class="chat-avatar"/>
                    <div class="chat-info">
                        <h5>Al Islam Joy</h5>
                        <span>12:00</span>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
