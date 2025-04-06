import { expect, test } from '@playwright/test'

/**
 * UI Playgroundの各ページに遷移し、ページが正しく表示されていることを確認するテスト
 */

test.describe('画面遷移テスト', () => {
  test('ホームページが正しく表示される', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/')

    // タイトルの確認
    await expect(page).toHaveTitle('Home')

    // 特徴的な要素の確認
    await expect(page.getByText('Playground🛝')).toBeVisible()
    await expect(page.getByText('Heart Laundry❤️🧺')).toBeVisible()
    await expect(page.getByText('React19🛠')).toBeVisible()
  })

  test('Playgroundページが正しく表示される', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/')

    // Playgroundページへ遷移
    await page.getByText('Playground🛝').click()

    // タイトルの確認
    await expect(page).toHaveTitle('Playground')

    // 特徴的な要素の確認
    await expect(
      page.getByRole('heading', {
        name: "Let's play with React and MUI components!",
      }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Client Side Storage' }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Scroll Ref' }),
    ).toBeVisible()
  })

  test('Heart Laundryページが正しく表示される', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/')

    // Heart Laundryページへ遷移
    await page.getByText('Heart Laundry❤️🧺').click()

    // タイトルの確認
    await expect(page).toHaveTitle('Heart Laundry')

    // 特徴的な要素の確認
    await expect(
      page.getByRole('heading', { name: 'Heart Laundry❤️🧺' }),
    ).toBeVisible()
    await expect(page.getByRole('textbox')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Wash it!!' })).toBeVisible()
  })

  test('React19ページが正しく表示される', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/')

    // React19ページへ遷移
    await page.getByText('React19🛠').click()

    // タイトルの確認
    await expect(page).toHaveTitle('React 19')

    // 特徴的な要素の確認
    await expect(
      page.getByRole('heading', { name: 'React 19', exact: true }),
    ).toBeVisible()
    // Transitionセクションの確認
    await expect(
      page.getByRole('heading', { name: 'Transition', exact: true }),
    ).toBeVisible()
    // Useセクションの確認 - 具体的なh6のテキストで検索
    await expect(
      page.getByText('use は Suspense と一緒に使うフック'),
    ).toBeVisible()
  })

  test('Aboutページが正しく表示される', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/')

    // Aboutページへ遷移
    await page.getByRole('link', { name: 'About' }).click()

    // 特徴的な要素の確認
    await expect(page.getByText('Hello from About!')).toBeVisible()
  })
})
