import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
//import Call from '../components/Call';

class fetcher extends React.Component {

    state={
        loading: true,
        error: false,
        data : []

    }

    componentDidMount(){
        fetch('http://my-simple-api.herokuapp.com/?year=1900').then(response => {

        console.log(response);
        return response.json()
        }).then(json=>{
           this.setState({
               data: json.results,
               loading: false
           })
            
        })

    }

    render(){

        const {loading, data} = this.state

    return (
        <Layout bodyClass="page-teams">
        <SEO title="Try to fetch stuff" />
            <center>
            This is simple version of trying to consume basic API.2
            </center>

            {
                data.map(character => <p key={character.name}> {character.name}</p> )
            }
            <div> ++++</div>

        </Layout>
    );
}
};


export default fetcher;
