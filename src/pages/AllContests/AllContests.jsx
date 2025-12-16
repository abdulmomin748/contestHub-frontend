const AllContests = () => {
  return (
    <div className="container px-10 m-auto">
      {/* name of each tab group should be unique */}
      
      <div className="tabs tabs-border py-30">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 1"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default AllContests;
