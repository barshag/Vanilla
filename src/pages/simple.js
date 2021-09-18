import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
//import Call from '../components/Call';

class simple extends React.Component {



    componentDidMount(){
        fetch('http://my-simple-api.herokuapp.com/?year=1900').then(response => {

        console.log(response);
    
        })  
        return response()

    }

    render(){

    return (
        <Layout bodyClass="page-teams">
        <SEO title="Try to fetch stuff" />
            <center>
            This is simple version of trying to consume basic API from Heroku.
            </center>

    
            <div> ++++</div>

        </Layout>
    );
}
};


export default simple;
