import React from 'react';

function UserCard({ employee }) {
  const { name, company, role, department, iconUrl } = employee; 

  return (
    <div className=" mb-3"> 
      <div className="card"> 
        <div className="card-body">
          <div className="user-icon text-center">
            {iconUrl ? (
              <img src={iconUrl} alt={`User Icon: ${name}`} />
            ) : (
              <div className="user-blob">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            
          </div>
          <div className="user-info text-center">
            <h3>{name}</h3>
            <p>
              <span className="company">{company}</span> - {role} ({department})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
