<template>  
    <div class="w-100 h-100 bg-white-50">
        <div class="pv3 ph1 ph2-ns ma0 ba br1 b--transparent measure-narrow center">
            <div class="dt w-100 pv2">
                <button class="pt1 ph1 w-100 button-reset ba b--light-gray bw1 gray grow bg-white pointer" value="Sign in with Google" id="goog_auth" @click="auth_social({options},'google-oauth2')">
                    <span class="dtc v-mid pl2 pt1">
                    <svg height="50" width="50" viewBox="0 0 28 28">
                        <g fill="none" fill-rule="evenodd">
                        <path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4"></path>
                        <path d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z" fill="#34A853"></path>
                        <path d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z" fill="#FBBC05"></path>
                        <path d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z" fill="#EA4335"></path>
                        </g>
                    </svg>
                    </span>
                    <div class="dtc pl3 v-mid mw5">
                    <span class="fl tl f5 avenir">
                        Sign in with Google
                    </span>
                    </div>
                </button>
            </div>
            
            <hr class="b--light-silver ba"/>
            <div class="dt w-100 pv3 dark-gray cf avenir f5">
                <div class="dt-row w-100">
                    <div class="dtc pv2 tr">
                        <span class="v-mid pr2">Email</span>
                        <input class="ba br3 pv2 pl2 w-70" type="email" placeholder="bob@smith.com">
                    </div>
                </div>
                <div class="dt-row w-100">
                    <div class="dtc pv2 tr">
                        <span class="v-mid pr2">Password</span>
                        <input class="ba br3 pv2 pl2 w-70" type="password">
                    </div>
                </div>
                <div class="dt-row">
                    <div class="dtc pv1">
                        <button class="bg-dark-gray ph3 pv2 ba br2 near-white f5" type="submit">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { genNonceState, reqURL } from '../middleware/auth.js';

export default {
  computed: {
    options() {
      return this.$store.state.auth;
    },
  },
  methods: {
    auth_social(options, provider) {
      options.options.connection = provider;
      const state_obj = genNonceState();
      options.options.state = state_obj.state;
      options.options.nonce = state_obj.nonce;
      const reqString = reqURL(options.options);
      //console.log(reqString);
      location.href = reqString;
    },
  },
};
</script>