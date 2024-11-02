import { test, expect } from '@playwright/test'

test('Is multiple using page.goto() flaky?', async ({ page }) => {
  await page.goto('/')

  // site が大きくなると、このテストは flaky になる？
  await page.goto('/playground')
  await expect(
    page.getByRole('heading', { name: 'Client Side Storage' }),
  ).toHaveCount(1)
})
