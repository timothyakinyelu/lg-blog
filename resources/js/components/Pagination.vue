<style lang="scss" scoped>
    .pagination {
        margin-top: 40px;
    }

    .pagination-list {
        display: inline-flex;
    }

    @keyframes cdp-in {
        from {
            transform: scale(1.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    .cdp {
    position: relative;
    text-align: center;
    justify-content: center;
    padding: 20px 0;
    font-size: 0;
    z-index: 6;
    margin: 50px 0;
    
    animation: cdp-in 500ms ease both;
    animation-timeout: 200ms;

    @media screen and (max-width: 787px) {
        margin: 0 0;
        margin-top:0; 
    }

    &_i {
        font-size: 14px;
        text-decoration: none;
        transition: background 250ms;
        display: inline-block;
        text-transform: uppercase;
        margin: 0 3px 6px;
        height: 38px;
        min-width: 38px;
        border-radius: 38px;
        border: 2px solid #fff;
        line-height: 38px;
        padding: 0;
        color: #fff;
        font-weight: 700;
        letter-spacing: .03em;
        display: none;
        background: #d0e8b7;

        &:first-child,
        &:last-child,
        &:nth-child(2),
        &:nth-last-child(2) {
        padding: 0 16px;
        margin: 0 12px 6px;
        }

        &:last-child,
        &:nth-child(2),
        &:nth-last-child(2) {
        display: inline-block;
        }
    }

    &_i:hover {
        background-color: #38c172;
        color: #fff;
    }

    &:not([is-current]) &_i:nth-child(1) {
        display: inline-block;
    }

    .is-current {
        background-color: rgb(192, 6, 6);
        color: #f8f9fa;
    }

    // @for $i from 1 through 80 {
    //     .cdp[is-current="#{$i}"] {
    //         // 3 before
    //         .cdp_i:nth-child(#{$i - 2}):not(:first-child):not(:nth-child(2)) {
    //         display: inline-block;
    //         pointer-events: none;
    //         color: transparent;
    //         border-color: transparent;
    //         width: 50px;
    //         &:after {
    //             content: '...';
    //             color: #fff;
    //             font-size: 32px;
    //             margin-left: -6px;
    //         }
    //         }
    //         // 2 before
    //         .cdp_i:nth-child(#{$i - 1}):not(:first-child) {
    //         display: inline-block;
    //         }
    //         // before
    //         .cdp_i:nth-child(#{$i}):not(:first-child) {
    //         display: inline-block;
    //         }
    //         // active
    //         .cdp_i:nth-child(#{$i + 1}) {
    //         background-color: rgb(240, 14, 14);
    //         color: #fff;
    //         display: inline-block;

    //         +.cdp_i:last-child {
    //             display: none !important;
    //         }
    //         }
    //         // next
    //         .cdp_i:nth-child(#{$i + 2}):not(:last-child) {
    //         display: inline-block;
    //         }
    //         // 2 next
    //         .cdp_i:nth-child(#{$i + 3}):not(:last-child) {
    //         display: inline-block;
    //         }
    //         // 3 next
    //         .cdp_i:nth-child(#{$i + 4}):not(:last-child):not(:nth-last-child(2)) {
    //         display: inline-block;
    //         pointer-events: none;
    //         color: transparent;
    //         border-color: transparent;
    //         width: 50px;
    //         &:after {
    //             content: '...';
    //             color: #fff;
    //             font-size: 32px;
    //             margin-left: -6px;
    //         }
    //         }
    //     }
    @media (max-width: 787px) {
        .cdp_i:first-child, 
        .cdp_i:last-child, .cdp_i:nth-child(2), 
        .cdp_i:nth-last-child(2) {
            padding: 0 5px;
            margin: 0 3px 6px;
        }
        ul {
            margin-bottom: 0;
        }
    }
}
</style>

<template>
    <nav class="pagination is-centered is-rounded cdp" role="navigation" aria-label="pagination">
        <a class="pagination-previous cdp_i" @click.prevent="changePage(1)" v-show="pagination.current_page > 1">First page</a>
        <a class="pagination-previous cdp_i" @click.prevent="changePage(pagination.current_page - 1)" v-show="pagination.current_page > 1">Previous</a>
        <ul class="pagination-list">
            <li class="page-numbers" v-for="(page, index) in pages" :key="index">
                <a class="pagination-link cdp_i" :class="isCurrentPage(page) ? 'is-current' : ''" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
        </ul>
        <a class="pagination-next cdp_i" @click.prevent="changePage(pagination.current_page + 1)" v-show="pagination.current_page < pagination.last_page">Next page</a>
        <a class="pagination-next cdp_i" @click.prevent="changePage(pagination.last_page)" v-show="pagination.current_page < pagination.last_page">Last page</a>
    </nav>
</template>

<script>
    export default {
        props: ['pagination', 'offset'],
        methods: {
            isCurrentPage(page) {
                return this.pagination.current_page === page;
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        },
        computed: {
            pages() {
                let pages = [];
                let from = this.pagination.current_page - Math.floor(this.offset / 2);
                if (from < 1) {
                    from = 1;
                }
                let to = from + this.offset - 1;
                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                while (from <= to) {
                    pages.push(from);
                    from++;
                }
                return pages;
            }
        }
    }
</script>