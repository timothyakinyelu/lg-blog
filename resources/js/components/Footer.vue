<style scoped>
    #bottom-footer {
        justify-content: center
    }
    ul {
        list-style: none;
        margin-bottom: 0;
    }
</style>

<template>
    <div>
        <div class="row row-no-gutters" id="bottom-footer" >
            <div class="col-xs-12 col-md-5 text-center" >
                <ul>
                    <li class="small">© Copyright {{ new Date().getFullYear() }} <strong>larissagideon.com</strong>. All Rights reserved.</li>
                </ul>
            </div>
        </div> <!--  end row  -->

    </div>
</template>

<script>
export default {
    
}
</script>