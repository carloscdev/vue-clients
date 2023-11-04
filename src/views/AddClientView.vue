<script setup>
import { useRouter } from 'vue-router';
import ClientService from '../services/client.service';
import { FormKit } from '@formkit/vue';
import Title from '../components/UI/Title.vue';
import { uuid } from "vue-uuid";

defineProps({
  title: {
    type: String,
    required: true
  }
})

const router = useRouter();
const handleSubmit = (data) => {
  data.state = true;
  data.id = uuid.v4();
  ClientService.addClient(data);
  router.push({ name: 'clients' });

}
</script>

<template>
  <div>
    <Title :title="title" />
    <div>
      <div class="max-w-[1080px] w-[95%] mx-auto mt-10">
        <FormKit
          type="form"
          submit-label="Save Changes"
          incomplete-message="An error has occurred, please check the form."
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="Name *"
            name="name"
            placeholder="Jhon"
            validation="required"
            :validation-messages="{ required: 'Complete the name field' }"
          />
          <FormKit
            type="text"
            label="Lastname *"
            name="lastname"
            placeholder="Doe"
            validation="required"
            :validation-messages="{ required: 'Complete the lastname field' }"
          />
          <FormKit
            type="email"
            label="Email *"
            name="email"
            placeholder="example@mail.com"
            validation="required|email"
            :validation-messages="{ required: 'Complete the email field', email: 'Enter a valid email' }"
          />
          <FormKit
            type="text"
            label="Phone *"
            name="phone"
            placeholder="xxx-xxx-xxx"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
            :validation-messages="{ matches: 'Enter a valid phone number' }"
          />
          <FormKit
            type="text"
            label="Company"
            name="company"
            placeholder="Google"
          />
          <FormKit
            type="text"
            label="Position"
            name="job"
            placeholder="Developer"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  min-width: 100%;
}
</style>