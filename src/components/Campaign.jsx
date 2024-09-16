import React from 'react'
import { useLocation } from 'react-router-dom'

function Campaign() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    // Extract UTM parameters
    const utmSource = queryParams.get('utm_source');
    const utmMedium = queryParams.get('utm_medium');
    const utmCampaign = queryParams.get('utm_campaign');

    return (
        <div>
            <h1>Campaign Page</h1>
            <p><strong>Source:</strong> {utmSource}</p>
            <p><strong>Medium:</strong> {utmMedium}</p>
            <p><strong>Campaign:</strong> {utmCampaign}</p>
        </div>
  )
}

export default Campaign