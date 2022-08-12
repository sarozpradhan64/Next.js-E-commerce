import { Grid, Button,Spacer, Textarea, Text, Input } from "@nextui-org/react";
import React from "react";
import HeaderTitle from "../components/headerTitle";
import Layout from "../components/layout";

export default function contact() {
  return (
    <Layout>
      <HeaderTitle title={"Contact Us"} backBtn={true} />
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} css={{display: 'flex', flexDirection: 'column', pt:'2rem'}}>

          <form name='Nanu Contact Form' method="POST" netlify data-netlify="true" >
          <input type="hidden" name="form-name" value="contact-form" />
          <Input clearable underlined css={{width:'100%'}} labelPlaceholder="Full Name" name='name' />
           <Spacer y={2} />
          
          <Input clearable underlined css={{width:'100%'}} labelPlaceholder="Email" type="email" name='email'/>
           <Spacer y={2} />
          
          <Input clearable underlined css={{width:'100%'}} labelPlaceholder="Phone" type={'number'} name='phone'/>
           <Spacer y={2} />
           <Textarea css={{width:'100%'}} name='message'
          underlined
          labelPlaceholder="Message"
        />
        <Spacer y={2} />
        <Button color={'secondary'} css={{borderRadius:"unset"}} type='submit'>Send Message</Button>
           </form>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
