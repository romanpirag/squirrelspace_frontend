import React from "react"

class SquirrelSearch extends React.Component {
  changeHandler = e => {
    return this.props.doSearch(e.target.value)
  }

  render() {
    return (
      <form>
        <input
          className="search-form"
          onChange={this.changeHandler}
          type="search"
          placeholder="FIND YOUR SQUIRREL!"
          value={this.props.searchQuery}
        />
      </form>
    )
  }
}

export default SquirrelSearch
