export default async function handler(req, res){
    const api_token = process.env.API_TOKEN; // TO DO: MAke accessible serverside
    const company_domain = "projektig";
    // console.log(api_token)
    // console.log(req.body)
    const body = await req.body
    try{
        const pers = await fetch(
            `https://${company_domain}.pipedrive.com/v1/persons?api_token=${api_token}
          `,
            {
              body: JSON.stringify({
                name: body.name,
                email: body.email,
                phone: body.phone,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            }
          );
      
          const person = await pers.json();
          const person_id = await person.data.id;
      
          const resLead = await fetch(
            `https://${company_domain}.pipedrive.com/v1/leads?api_token=${api_token}
      
              `,
            {
              body: JSON.stringify({
                title: body.company,
                person_id: person_id,
                label_ids: ["9138bac0-6d78-11ec-b1a8-2375d5ff0f8c"],
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            }
          );
      
        //   console.log(person);
      
          res.status(200).json({data: {person: person, lead: resLead}})
    }catch(e){
        console.error(e)
        res.status(400).json({e})

    }
    
}