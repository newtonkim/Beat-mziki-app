import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from "vee-validate"
import {
  required,
  alpha_spaces as alphaSpaces,
  min,
  max,
  email,
  integer,
  max_value as maxValue,
  min_value as minValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'


export default {
    install(app){
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('tos', required)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('alpha_spaces', alphaSpaces)
        defineRule('email', email)
        defineRule('max_value', maxValue)
        defineRule('min_value', minValue)
        defineRule('password_mismatch', confirmed)
        defineRule('excluded', excluded)
         defineRule('country_excluded', excluded)

        configure({
            generateMessage: (ctx) => {
                const messages = {
                  required: `The field ${ctx.field} is required`,
                  min: `The field ${ctx.field} is to short`,
                  max: `The field ${ctx.field} is to long`,
                  alpha_spaces: `The field ${ctx.field} may only contain alphabetic character and spaces`,
                  email: `The field ${ctx.field} must be a valide email`,
                  max_value: `The field ${ctx.field} is too high.`,
                  min_value: `The field ${ctx.field} is too low .`,
                  confirmed: `The field ${ctx.field} `,
                  excluded: `You are not allowed to use this value for the field ${ctx.field} `,
                  country_excluded: `Due to restrictions we do not accept users from this location.`,
                  password_mismatch: "The passwords do not match.",
                  tos: "You must accept the terms of service.",
                };

                const message = messages[ctx.rule.name] ?  messages[ctx.rule.name] : `The field ${ctx.field} is invalid`;

                    return message;
            },

            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    },
};