<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />

        <div class="flex-grow overflow-auto px-4 py-12">
            <div class="prose prose-blue mx-auto">
                <slot />
            </div>
        </div>

        <AppFooter />
    </div>
</template>

