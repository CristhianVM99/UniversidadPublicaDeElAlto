<template>
    <div class="edu-team-grid team-style-2">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <n-link to="/" exact>
                        <img :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad" alt="" />
                    </n-link>
                </div>
                <ul class="team-share-info">                    
                    <li><a :href="autoridad.facebook_autoridad" target="_blank" class="color-fb"><i class="icon-facebook"></i></a></li>                         
                    <li><a :href="autoridad.twiter_autoridad" target="_blank" class="color-twitter"><i class="icon-twitter"></i></a></li>
                    <li><a :href="autoridad.celular_autoridad" target="_blank" class="color-yt"><i class="icon-youtube"></i></a></li>
                </ul>
            </div>
            <div class="content">
                <h5 class="title">
                    {{ autoridad.nombre_autoridad }}
                </h5>
                <span class="designation">{{ autoridad.cargo_autoridad }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['autoridad'],
        data() {
            return {
                url_api: process.env.APP_ROOT_API
            }
        },
    }
</script>