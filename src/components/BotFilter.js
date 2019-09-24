import React from "react"

export default class BotCollection extends React.Component {
    render(){
        return(
            <div className="row">
                <form onChange={(e) => this.props.filter(e)}>
                    <label htmlFor="filter">Filter Bots by Class:</label>
                    <select name="filter" id="filter" value={this.props.filterValue}>
                        <option value="All">All</option>
                        <option value="Defender">Defender</option>
                        <option value="Support">Support</option>
                        <option value="Assault">Assault</option>
                    </select>
                </form>
            </div>
        )
    }
}